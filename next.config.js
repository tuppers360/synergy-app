/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,    
    domains: ['images.unsplash.com', 'source.unsplash.com', 'tailwindui.com'],
  },
};

module.exports = nextConfig;
