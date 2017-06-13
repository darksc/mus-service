const router = require('koa-router')()
const Shop = require('../db/shop')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/shops', async (ctx, next) => {
  await Shop.findAll().then(shops => {
    ctx.body = shops
  })
})

router.get('/shop', async (ctx, next) => {
  const id = ctx.query['id']
  await Shop.findOne({
    where: {
      id: id
    }
  }).then(shop => {
    ctx.body = shop
  })
})

router.post('/add', async (ctx, next) => {
  const id = ctx.query['id']
  await Shop.save({
    where: {
      id: id
    }
  }).then(shop => {
    ctx.body = shop
  })
})

module.exports = router
