module.exports = {
  webpack: config => {
    // For Winston
    // https://github.com/winstonjs/winston/issues/287
    config.node = { fs: "empty" };
    if (process.env.WEBPACK_BUNDLE_ANALYZER) {
      // eslint-disable-next-line node/no-unpublished-require
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          generateStatsFile: true,
          openAnalyzer: false
        })
      );
    }

    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/fonts/",
            outputPath: "static/fonts/",
            name: "[name]-[hash].[ext]"
          }
        }
      ]
    });
    return config;
  }
};
