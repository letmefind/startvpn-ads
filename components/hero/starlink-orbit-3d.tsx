"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const EARTH_MAP =
  "https://cdn.jsdelivr.net/gh/mrdoob/three.js@r172/examples/textures/planets/earth_atmos_2048.jpg";

/** Orbital angular speed multiplier (1/3 = one third of default). */
const SATELLITE_MOTION_SCALE = 1 / 3;

function EarthFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 48, 48]} />
      <meshStandardMaterial
        color="#1e3a5f"
        emissive="#0c4a6e"
        emissiveIntensity={0.55}
        roughness={0.72}
        metalness={0.18}
      />
    </mesh>
  );
}

function EarthTextured() {
  const loaded = useLoader(THREE.TextureLoader, EARTH_MAP);
  const map = useMemo(() => {
    const texture = loaded.clone();
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    return texture;
  }, [loaded]);

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={map}
        roughness={0.62}
        metalness={0.14}
        emissive="#030712"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

function AtmosphereGlow() {
  return (
    <mesh scale={1.055}>
      <sphereGeometry args={[1, 40, 40]} />
      <meshBasicMaterial
        color="#22d3ee"
        transparent
        opacity={0.09}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function RotatingEarth() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={group}>
      <Suspense fallback={<EarthFallback />}>
        <EarthTextured />
      </Suspense>
      <AtmosphereGlow />
    </group>
  );
}

type OrbitItem = {
  r: number;
  phase: number;
  speed: number;
  tiltX: number;
  tiltY: number;
  idx: number;
};

function buildOrbits(): OrbitItem[] {
  const shells = [
    { r: 1.16, n: 28, speed: 1.05, tiltX: 0.14, tiltY: 0.1 },
    { r: 1.26, n: 32, speed: -0.92, tiltX: 0.46, tiltY: -0.24 },
    { r: 1.38, n: 36, speed: 0.78, tiltX: -0.2, tiltY: 0.5 },
    { r: 1.5, n: 42, speed: -0.68, tiltX: 0.3, tiltY: -0.42 },
    { r: 1.63, n: 48, speed: 0.58, tiltX: 0.58, tiltY: 0.18 },
    { r: 1.76, n: 52, speed: -0.5, tiltX: -0.35, tiltY: -0.55 },
  ];

  const items: OrbitItem[] = [];
  let idx = 0;
  for (const s of shells) {
    for (let k = 0; k < s.n; k++) {
      items.push({
        r: s.r,
        phase: (k / s.n) * Math.PI * 2,
        speed: s.speed,
        tiltX: s.tiltX,
        tiltY: s.tiltY,
        idx: idx++,
      });
    }
  }
  return items;
}

function StarlinkConstellation() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const euler = useMemo(() => new THREE.Euler(), []);
  const vec = useMemo(() => new THREE.Vector3(), []);

  const items = useMemo(() => buildOrbits(), []);
  const scales = useMemo(
    () => items.map((_, i) => 0.65 + (Math.abs(Math.sin((i + 1) * 2.17)) * 0.55)),
    [items],
  );

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const t = state.clock.elapsedTime;
    let i = 0;

    for (const it of items) {
      const phi = it.phase + t * it.speed * SATELLITE_MOTION_SCALE;
      vec.set(it.r * Math.cos(phi), 0, it.r * Math.sin(phi));
      euler.set(
        it.tiltX,
        it.tiltY + t * 0.028 * SATELLITE_MOTION_SCALE * (it.idx % 2 === 0 ? 1 : -1),
        0,
      );
      vec.applyEuler(euler);

      dummy.position.copy(vec);
      dummy.lookAt(0, 0, 0);
      dummy.rotateZ(Math.PI / 2);
      dummy.scale.setScalar(scales[it.idx]);
      dummy.updateMatrix();
      mesh.setMatrixAt(i++, dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, items.length]} frustumCulled={false}>
      <boxGeometry args={[0.032, 0.016, 0.062]} />
      <meshStandardMaterial
        color="#cffafe"
        emissive="#22d3ee"
        emissiveIntensity={1.35}
        metalness={0.88}
        roughness={0.16}
      />
    </instancedMesh>
  );
}

export function StarlinkOrbit3D() {
  return (
    <div className="relative h-[min(72vw,22rem)] w-full max-w-md md:h-[min(36vw,26rem)]">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/25 blur-3xl" />
      <Canvas
        className="relative z-[1] h-full w-full rounded-full"
        camera={{ position: [0, 0.45, 3.35], fov: 40 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.32} />
        <directionalLight position={[6, 4, 6]} intensity={1.15} color="#f0f9ff" />
        <pointLight position={[-5, -2, 5]} intensity={0.55} color="#38bdf8" />
        <pointLight position={[0, 5, -4]} intensity={0.35} color="#a78bfa" />

        <group rotation={[-0.22, -0.55, 0]}>
          <RotatingEarth />
          <StarlinkConstellation />
        </group>
      </Canvas>
    </div>
  );
}
