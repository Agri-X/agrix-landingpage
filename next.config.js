/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/agrix-landing',
  } : {}),
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 