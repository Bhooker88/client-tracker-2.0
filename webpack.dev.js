const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;

// Only for Gitpod
if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `wss://${port}-${host}/ws`;
}

// Only for Codespaces
if (process.env.CODESPACE_NAME) {
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.preview.app.github.dev/ws`;
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port,
    hot: true,
    allowedHosts: "all",
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    client: {
      webSocketURL: publicUrl
    },
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "vm": require.resolve("vm-browserify"),
      "stream": require.resolve("stream-browserify"),
      "process": require.resolve("process/browser")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  ]
});
