
const uuidV4 = require('uuid/v4')
const fetch = require('node-fetch')
const Shop = require('../db/shop')

module.exports = async function shopsService (ctx, next) {
  await Shop.findAll().then(shops => {
    ctx.body = shops
  })
}

module.exports = async function shopService (ctx, next) {
  const id = ctx.query['id']
  await Shop.findOne({
    where: {
      id: id
    }
  }).then(shop => {
    ctx.body = shop
  })
}

module.exports = async function addShopService (ctx, next) {
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
      ctx.body = ''
    })
}

module.exports = async function getOpenId (ctx, next) {
  const code = ctx.query['code'],
    appid = 'wx2ac89fd89e184752',
    secret = '5ff66fda941bbf4f23b0062cdcb11cbc',
    grant_type = 'authorization_code'

  await fetch(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=${grant_type}`)
    .then(res => res.json())
    .then(json => {
      ctx.body = json
    })
}
