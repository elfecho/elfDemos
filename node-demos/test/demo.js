const http = require('http') //引入HTTP协议模块
const fs = require('fs') //引入fs模块
// const { json } = require('node:stream/consumers')

//创建HTTP协议的服务器
let serer = http.createServer((req, res) => {
  //1.1判断接口名称和请求方式
  let url = req.url
  let method = req.method
  res.setHeader('content-type', 'text/html;charset=utf8')
  if (url === '/add' && method === 'POST') {

    let result = '' //接收前端的参数
    //data事件，每次收到一部分参数数据就会触发一次这个事件。
    //1.数据大会分批次接收
    //2.数据小则可以一次性接收完毕
    req.on('data', (chunk) => { //chunk代表传入的数据
      console.log('接收数据成功');
      result += chunk
    })

    // end事件，全部的参数数据接收完成之后会执行一次。
    req.on('end', () => {
      let query = new URLSearchParams(result)
      console.log('result', query, query.get('a'))
      //读取json文件中的内容
      // let str = fs.readFileSync('./data.json', 'utf-8')
      // //把数据转换成数组
      // let arr = JSON.parse(str)
      // //解析前端传入的数据
      // let query = new URLSearchParams(result)
      // arr.push({
      //   name: query.get('name'),
      //   skinname: query.get('skinname')
      // })

      // //把最新的数据写入json文件中
      // fs.writeFileSync('./data.json', JSON.stringify(arr))
      // //把文件读取出来
      // let newStr = fs.readFileSync('./data.json', 'utf-8')
      //把文件按内容展示在页面中
      res.end('123')
    })

  } //请求接口或方式错误的处理
  else {
    res.statusCode = 404
    res.end('找不到请求数据接口')
  }

})

//监听服务器，8999端口号
serer.listen(8999, () => {
  console.log('http://localhost:8999');
})