const router = require('koa-router')()
const uuidV4 = require('uuid/v4');
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
  const name = ctx.body['name']
  await Shop
    .build({
      id: 'mus' + uuidV4(),
      name: ctx.body['name'],
      address: ctx.body['address'],
      phone: ctx.body['phone'],
      price: ctx.body['price'],
      latitude: ctx.body['latitude'],
      longitude: ctx.body['longitude'],
      time: ctx.body['time'],
      nexttime: ctx.body['nexttime'],
      discount: ctx.body['discount'],
      discountInfo: ctx.body['discountInfo'],
      event: ctx.body['event'],
      eventInfo: ctx.body['eventInfo'],
      game: ctx.body['game'],
      gameInfo: ctx.body['gameInfo']
    })
    .save()
    .then(shop => {

    })
})

module.exports = router
