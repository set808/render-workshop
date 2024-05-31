'use strict'

const nrExternals = require('@newrelic/next/load-externals')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  experimental: {
    serverComponentsExternalPackages: ['newrelic']
  },
  webpack: (config) => {
    nrExternals(config)
    return config
  }
}

module.exports = nextConfig
