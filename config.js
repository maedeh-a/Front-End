export const baseURL = 'https://api.submelk.net'

// module.exports = {
//     images: {
//         domains: ['api.submelk.net'],
//     },
// }
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {appDir: true},
    images:{
      domains: ['submelk.net', 'api.submelk.net']
    }
  }

  module.exports = nextConfig