import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'getwallpapers.com',
        port: '',
        pathname: '/**', // Allows all paths from this domain
      },
    ],
  },
};

export default nextConfig;
