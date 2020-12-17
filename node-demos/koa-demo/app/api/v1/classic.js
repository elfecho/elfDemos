const Router=require('koa-router')
const {
  Flow
} = require('../../models/flow')


const router=new Router({
  prefix: '/v1/classic'
})

const { Auth } = require('../../../middlewares/auth')



const {
  PositiveIntegerValidator
} = require('../../validators/validators')

router.get('/latest', new Auth().m, async (ctx, next) => {

  const flow = Flow.findOne({
    order: [
      ['index', 'DESC']
    ]
  })



  ctx.body = flow
  
})

module.exports = router