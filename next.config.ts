import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/PORTFOLIO" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/PORTFOLIO/" : "",
  trailingSlash: true,
};

export default nextConfig;
