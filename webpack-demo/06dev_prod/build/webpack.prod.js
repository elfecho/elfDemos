const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map'
}

module.exports = merge(commonConfig, prodConfig)