import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/redlua_wedding",

  images: {
    unoptimized: true,
  },

  reactCompiler: true,
};

export default nextConfig;