const Router=require('koa-router')
const {
  Flow
} = require('../../models/flow')


const router=new Router({
  prefix: '/v1/classic'
})

const { Auth } = require('../../../middlewares/auth')

const { Art } = require('../../models/art')
const { Favor } = require('../../models/favor')
const { PositiveIntegerValidator, classicValidator } = require('../../validators/validators')


router.get('/latest', new Auth().m, async (ctx, next) => {

  const flow = await Flow.findOne({
    order: [
      ['index', 'DESC']
    ]
  })

  const art = await Flow.getDetail(flow.art_id, flow.type, flow.index, ctx.auth.uid)

  ctx.body = art
})

router.get('/:index/next', new Auth().m, async (ctx, next) => {
  const v = await new PositiveIntegerValidator().validate(ctx, {
    id: 'index'
  })
  const flow = await Flow.getAround(v.get('path.index'), ctx.auth.uid, 'next')
  ctx.body = flow
})

router.get('/:index/previous', new Auth().m, async (ctx, next) => {
  const v = await new PositiveIntegerValidator().validate(ctx, {
    id: 'index'
  })
  const flow = await Flow.getAround(v.get('path.index'), ctx.auth.uid, 'previous')
  ctx.body = flow
})

router.get('/:type/:id/favor', new Auth().m, async (ctx, next) => {
  const v = await new classicValidator().validate(ctx)
  const id = v.get('path.id')
  const type = parseInt(v.get('path.type'))

  const art = await Art.getData(id, type)
  if (!art) {
    throw new global.errs.NotFound()
  }
  const like = await Favor.userLikeIt(id, type, ctx.auth.uid)

  ctx.body = {
    fav_nums: art.fav_nums,
    like_status: like
  }
})

module.exports = router