var fs = require('fs')
// 阻塞代码
// var data = fs.readFileSync('input.txt')

// console.log(data.toString())
// console.log('-----end-----')

// 非阻塞代码
fs.readFile('input.txt', function(err, data) {
  if (err) {
    return console.log(err)
  }
  console.log(data.toString())
})

console.log('-----end-----')