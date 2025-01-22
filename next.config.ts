import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    streamingMetadata: true,
  }
};

export default nextConfig;
