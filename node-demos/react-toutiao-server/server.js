var http = require('http')
var https = require('https')
var fs = require('fs')
var TEMPLATE_ROOT_DIR = 'D:/github/day21/react-toutiao/dist/html/'
var STATIC_DIR = 'D:/github/day21/react-toutiao/dist/static/'

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

const actionMap = [
  {
    uri: /^\/home/,
    handler: function (req, res) {
      console.log('访问了home')
      // 获取并渲染了html字符串
      readContent(TEMPLATE_ROOT_DIR, '/index.html').then(content => {
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
      readContent(STATIC_DIR, filepath)
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
      https
        .get('https://m.toutiao.com/list/?tag=__all__&max_time=0&min_behot_time=0&ac=wap&count=20&format=json_raw&_signature=IEYCcAAAQrlcYWc2jAGMqyBGAm&i=&as=A136925F53D7622&cp=62F38716B2F2CE1&aid=1698',
          function (list) {
            let body = ''
            list.on('data', chunk => {
              // console.log(chunk.toString())
              body += chunk
            }).on('end', () => {
              var bodyObj = JSON.parse(body)
              res.write(JSON.stringify({
                data: [
                  {
                    "type": "singlePic",
                    "data": {
                      "articleUrl": bodyObj.data[0].article_url,
                      "title": bodyObj.data[0].title,
                      "id": "i6727634212259643916",
                      "imageList": bodyObj.data[0].image_list
                    }
                  }
                ]
              }))
              res.end()

            })
          })

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