const webpack = require("webpack");

module.exports = {
  webpack: {
    alias: {
      path: "path-browserify",
      os: "os-browserify/browser",
      crypto: "crypto-browserify",
      buffer: "buffer",
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util/"),
        process: require.resolve("process/browser"),
        crypto: require.resolve("crypto-browserify"),
        buffer: require.resolve("buffer/"),
      };

      webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        }),
      ]);

      return webpackConfig;
    },
  },
};
