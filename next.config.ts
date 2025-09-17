import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    eslint: {
    // Désactive ESLint pendant le build
    ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com'
        }
      ]
    }
};

export default nextConfig;