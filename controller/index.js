
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
