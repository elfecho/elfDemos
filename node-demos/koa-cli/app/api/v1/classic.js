const Router=require('koa-router')
const router=new Router({
  prefix: '/v1/classic'
})

const { Auth } = require('../../../middlewares/auth')



const {
  PositiveIntegerValidator
} = require('../../validators/validators')

router.post('/latest', new Auth().m, async (ctx, next) => {
  ctx.body = ctx.auth.uid
  // const path = ctx.params
  // const query = ctx.request.query
  // const headers = ctx.request.header
  // const body = ctx.request.body

  // const v = await new PositiveIntegerValidator().validate(ctx)
  
  // ctx.body = {
  //   key: 'classic'
  // }
})

module.exports = router