const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withTypescript(
  withSass({
    webpack(config, options) {
      return config;
    },
    cssModules: true,
    sassLoaderOptions: {}
  }),
  withImages({
    webpack(config, options) {
      return config;
    }
  })
);
