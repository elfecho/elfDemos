const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  ctx.body = {
    data: [
      "liu",
      "jun",
      "hao"
    ]
  }
});

app.listen(8089, () => {
  console.log('端口已开启， localhost:8089')
});