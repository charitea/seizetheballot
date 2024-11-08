/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Make sure this matches your repository name exactly
    basePath: '/seizetheballot'  // I see this is your repo name from the error message
  }
  
  module.exports = nextConfig