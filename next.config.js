/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  // 🔥 Temporarily disable minification
  swcMinify: false,

  // 🔥 Enable production source maps
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig