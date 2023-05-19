/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isDev ? undefined : "./",
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
