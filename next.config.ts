import type { NextConfig } from "next";


const repo = "techworkshop-1";
const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    basePath: `/${repo}`,
    assetPrefix: `/${repo}`,

};

export default nextConfig;
