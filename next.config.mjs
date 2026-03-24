/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Inline critical CSS and defer non-critical CSS chunks
    // Eliminates render-blocking CSS requests
    optimizeCss: true,
    // Merge CSS chunks loaded on the same page into fewer requests
    cssChunking: true,
  },
};

export default nextConfig;
