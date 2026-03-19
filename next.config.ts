import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Keep your existing options */
  reactCompiler: true,

  /* Add the image whitelist here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;