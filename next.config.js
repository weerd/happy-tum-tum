const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/happy-tum-tum' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = withPlugins([withCSS()], nextConfig);
