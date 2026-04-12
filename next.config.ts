import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Static HTML/CSS/JS in `out/` for hosts like Hestia (no Node on server). */
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "netblocks.org",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
