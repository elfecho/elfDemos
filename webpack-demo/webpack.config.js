const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          // placeholder 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          useRelativePath: true
        }
      }]
    }, {
      test: /\.scss$/,
      // css编译执行顺序，从下到上，从右到左
      use: [
        'style-loader', 
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // 无论js引入scss文件还是scss引入scss文件都会调用这些loader
            modules: true
          }
        }, 
        'sass-loader',
        'postcss-loader'
      ]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}