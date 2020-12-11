const merge = require('webpack-merge');
const commonConfig = require('./webpack.common')
const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-evel-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8888,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig)