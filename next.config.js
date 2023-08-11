module.exports = {
  //   experimental: { images: { allowFutureImage: true } },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*submelk*',
      },
      {
        protocol: 'https',
        hostname: '87.107.162.33',
      }],
    // unoptimized: true,
  },
  trailingSlash: false,
};
