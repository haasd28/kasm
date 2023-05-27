/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Dennis Workspace',
    description: '-------',
    icon: '/img/logo.svg',
    listUrl: 'https://haasd28.github.io/kasm/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
