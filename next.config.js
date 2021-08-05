module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['i.pravatar.cc', 'tractian-img.s3.amazonaws.com'],
  },
};
