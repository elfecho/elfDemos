var http = require('http')

var server = http.createServer((req, res) => {
  // 收到请求
  res.write('<div>hello node</div>')
  res.end()
})

server.listen(9001)

