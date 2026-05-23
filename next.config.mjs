/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    cssChunking: 'loose',
    optimizePackageImports: ['next/font/google'],
  },
};

export default nextConfig;
