module.exports = {
  transform: {
    //  用 `vue-jest` 处理 `*.vue` 文件
    '^.+\\.jsx?$': 'babel-jest', // Adding this line solved the issue
  }
}
