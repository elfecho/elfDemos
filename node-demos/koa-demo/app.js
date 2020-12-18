require('module-alias/register')
const Koa = require('koa');
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exceptions')

const app = new Koa();



app.use(catchError)
app.use(parser())


InitManager.initCore(app)

app.listen(3000, () => {
  console.log('端口已开启， localhost:3000')
});