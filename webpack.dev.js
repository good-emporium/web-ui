const merge = require('webpack-merge');
const webpack = require("webpack");

const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
});
