const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.showup.events' },
      { protocol: 'https', hostname: 'cloudflare-ipfs.com' },
    ],
  },
}

module.exports = withPWA(nextConfig)
