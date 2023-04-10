/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['photos.google.com'],
  },
}

module.exports = nextConfig
