/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // turn off the image optimizer entirely
    unoptimized: true,
    // you can also force a simple loader and no path prefix:
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
