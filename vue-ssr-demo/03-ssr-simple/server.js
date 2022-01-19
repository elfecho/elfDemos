const Vue = require('vue')
const server = require('express')()
// 创建服务端的渲染器
const renderer = require('vue-server-renderer').createRenderer()


server.get('*', async (request, response) => {
  const app = new Vue({
    data: {
      url: request.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })
  response.status(200)
  response.setHeader('Content-type', 'text/html;charset-utf-8')

  renderer.renderToString(await app, (err, html) => {
    if (err) {
      response.status(500).end('Internal Server Error')
      return
    }
    response.end(`<!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080, () => {
  console.log('服务已启动')
})