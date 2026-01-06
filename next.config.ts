import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    // some CI environments or older eslint configs can cause non-blocking warnings;
    // ignore linting during build to keep builds deterministic here.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
