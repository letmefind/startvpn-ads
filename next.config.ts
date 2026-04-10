import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Static HTML/CSS/JS in `out/` for hosts like Hestia (no Node on server). */
  output: "export",
};

export default nextConfig;
