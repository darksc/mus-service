const router = require('koa-router')()
const uuidV4 = require('uuid/v4')
const fetch = require('node-fetch')
const Shop = require('../db/shop')

router.get('/', (ctx, next) => {
  ctx.body = '1'
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

router.get('/getOpenId', async (ctx, next) => {
  const code = ctx.query['code']
  const appid = 'wx2ac89fd89e184752'
  const secret = '5ff66fda941bbf4f23b0062cdcb11cbc'
  const grant_type = 'authorization_code'
  console.log(code)
  await fetch(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=${grant_type}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      ctx.body = json
    })
})

module.exports = router
