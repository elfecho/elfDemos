const path = require('path')
module.exports = {
  pages: {
    client: 'src/modules/client/client.js',
    index: "src/main.js"
  },
  devServer:{
    hot: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.scss')      //你的.scss文件所在目录
      ]
    }
  }
}