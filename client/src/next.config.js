const path = require('path');
const withTypeScript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = withTypeScript(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: isDev ? '[folder]-[local]-[hash:base64:6]' : '[hash:base64:6]',
      sourceMap: isDev,
    },
    sassLoaderOptions: {
      sourceMap: isDev,
    },
    distDir: 'next',
    webpack: async config => {
      config.devtool = isDev && 'source-map';
      const originalEntries = config.entry;
      config.entry = async () => {
        const entries = await originalEntries();
        return entries;
      };
      return config;
    },
  }),
);
