/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  ...(process.env.NODE_ENV === 'production' ? {
    // basePath: '/agrix-landing',
    distDir: 'dist',
  } : {}),
  images: {
    unoptimized: true,
  },
  assetPrefix: ""
}

module.exports = nextConfig 