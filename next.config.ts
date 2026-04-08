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
  // output: "export",


  redirects:async()=>{
    return[
      
      {
        source: '/user1/:userid',
        destination: "/",
        permanent: false
      }
    ]
  }
};

export default nextConfig;
