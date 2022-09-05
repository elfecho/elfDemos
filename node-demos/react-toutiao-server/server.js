var http = require('http')
var utils = require('./utils')
var apis = require('./apis')
var TEMPLATE_ROOT_DIR = 'D:/github/day21/react-toutiao/dist/html/'
var STATIC_DIR = 'D:/github/day21/react-toutiao/dist/static/'


const actionMap = [
  {
    uri: /^\/home/,
    handler: function (req, res) {
      console.log('访问了home')
      // 获取并渲染了html字符串
      utils.readContent(TEMPLATE_ROOT_DIR, '/index.html').then(content => {
        res.write(content)
        res.end()
      })

    }
  },
  {
    uri: /^\/static/,
    handler: function (req, res) {
      // 从path上获取一下静态文件
      console.log('访问了 static')
      console.log('req.url::', req.url)
      var filepath = req.url.replace(/^\/static/, '').replace(/\?.*$/, '')
      console.log('filepath::', filepath)
      utils.readContent(STATIC_DIR, filepath)
        .then(content => {
          res.write(content)
          res.end()
        })
      // res.write('<div>我是static</div>')
      // res.end()
    }
  },
  {
    uri: /^\/list\/?$/,
    handler: function (req, res) {
      apis.getList().then(content => {
        const listStr = apis.convert(content)
        res.write(listStr)
        res.end()
      })

    }
  },
  {
    uri: /^\/end\/?$/,
    handler: function (req, res) {
      console.log('req', req.url)
      res.write(JSON.stringify({
        "data": req.url
      }))
      res.end()
    }
  }

]

var server = http.createServer((req, res) => {
  // 收到请求
  // console.log('request:', request, response)
  // console.log('path::', req.url)
  const actions = actionMap.filter(({ uri }) => uri.exec(req.url))
  actions.forEach(action => action.handler(req, res))
  console.log('actions::', actions)
  // res.write('<div>elfecho 来得早</div>')
  // res.end()
})

server.listen(9000)