import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/PORTFOLIO" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/PORTFOLIO/" : "",
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
