import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    // Désactive ESLint pendant le build
    ignoreDuringBuilds: true,
  },
    images: {
      domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
