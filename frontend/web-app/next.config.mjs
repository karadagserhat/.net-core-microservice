/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ['pixabay.com'],
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.pixabay.com' }],
  },
};

export default nextConfig;
