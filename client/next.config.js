const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withSourceMap = require("@zeit/next-source-maps");
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
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            fallback: "file-loader",
            publicPath: "/_next/",
            outputPath: "static/images/",
            name: "[name]-[hash].[ext]"
          }
        }
      });
      return config;
    }
  }),
  withSourceMap({
    webpack(config, options) {
      options.dev = { devtool: "hidden-source-map" };
      return config;
    }
  })
);
