import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Static HTML/CSS/JS in `out/` for hosts like Hestia (no Node on server). */
  output: "export",
  /**
   * false → `out/knowledge.html` (یک فایل در ریشهٔ out) برای Apache ساده‌تر از پوشهٔ knowledge/
   * true → `out/knowledge/index.html` (نیاز به DirectoryIndex درست)
   */
  trailingSlash: false,
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
