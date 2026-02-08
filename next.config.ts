import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // Replace the basePath/assetPrefix if your repo name is different
  basePath: "/reevwritter-frontend",
  assetPrefix: "/reevwritter-frontend/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
