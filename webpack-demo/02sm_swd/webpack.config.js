const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // mode: 'production',
  // devtool: 'cheap-module-source-map',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    open: true
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          // placeholder 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 10240
        }
      }]
    }, {
      test: /\.(eot|ttf|svg|woff)$/,
      use: {
        loader: 'file-loader'
      }
    }, {
      test: /\.scss$/,
      // css编译执行顺序，从下到上，从右到左
      use: [
        'style-loader', 
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2 // 无论js引入scss文件还是scss引入scss文件都会调用这些loader
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), new CleanWebpackPlugin(['dist'])],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}