/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    cssChunking: true,
    optimizePackageImports: ['next/navigation', 'next/link', 'next/font/google'],
  },
};

export default nextConfig;
