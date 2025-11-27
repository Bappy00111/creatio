/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.creatio.com.au',
       
      },
    ],
  },
};

export default nextConfig;
