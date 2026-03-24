/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    cssChunking: true,
    optimizePackageImports: ['next/font/google'],
  },
};

export default nextConfig;
