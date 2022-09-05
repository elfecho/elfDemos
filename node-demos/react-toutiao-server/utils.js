/**
 * @file
 * @author elfecho
 * 
*/

var fs = require('fs')


// 渲染函数
function readContent(ROOT_DIR, path) {
  // const content = fs.readFileSync(TEMPLATE_ROOT_DIR + path)
  // console.log(content)  // 尽量不用同步
  return new Promise(function (resolve, reject) {
    fs.readFile(ROOT_DIR + path, 'utf-8', function (err, content) {
      if (err) {
        reject(err)
      }
      resolve(content)
    })
  })
}

module.exports = {
  readContent: readContent
}