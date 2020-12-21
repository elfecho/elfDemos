require('module-alias/register')
const Koa = require('koa');
const parser = require('koa-bodyparser')
const path = require('path')
const static = require('koa-static')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exceptions')

const app = new Koa();



app.use(catchError)
app.use(parser())
// console.log(__dirname)
app.use(static(path.join(__dirname,'./static')))

InitManager.initCore(app)

app.listen(3000, () => {
  console.log('端口已开启， localhost:3000')
});