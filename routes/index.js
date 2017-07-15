const router = require('koa-router')()
const controller = require('../controller/')

router.get('/', (ctx, next) => {
  ctx.body = '钓鱼岛小程序服务接口'
})

// 获取商店列表
router.get('/shops', controller.shopsService)

// 获取商店详情
router.get('/shop', controller.shopService)

// 添加新商店 TODO 需要做事物处理
router.post('/add', controller.addShopService)

/**
 * 获取用户 openid
 * @param code 用户允许登录后，回调内容会带上 code（有效期五分钟）
 */
router.get('/getOpenId', controller.getOpenId)

module.exports = router
