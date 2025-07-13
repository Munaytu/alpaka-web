import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEWSDATA_IO_API_KEY: process.env.NEWSDATA_IO_API_KEY,
    NEWSAPI_ORG_API_KEY: process.env.NEWSAPI_ORG_API_KEY,
  },
};

export default nextConfig;
