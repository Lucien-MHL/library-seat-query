import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/getAllArea',
        destination: 'https://seat.tpml.edu.tw/sm/service/getAllArea'
      }
    ]
  }
}

export default nextConfig
