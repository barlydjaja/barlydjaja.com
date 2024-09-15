/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shopee.co.id',
        port: '',
        pathname: '/favicon.ico',
      },
    ],
  },
};

export default nextConfig;
