/**
 * Created by darK on 2017/6/10.
 */
const Sequelize = require('sequelize')
const sequelize = require('./connect')

const Shop = sequelize.define('shops', {
  // 唯一标识
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  // 名称
  name: {
    type: Sequelize.STRING
  },
  // 地址
  address: {
    type: Sequelize.STRING
  },
  // 电话
  phone: {
    type: Sequelize.STRING
  },
  // 价格
  price: {
    type: Sequelize.FLOAT
  },
  // 距离
  distance: {
    type: Sequelize.FLOAT
  },
  // 纬度
  latitude: {
    type: Sequelize.FLOAT
  },
  // 经度
  longitude: {
    type: Sequelize.FLOAT
  },
  // 放鱼时间
  time: {
    type: Sequelize.DATE
  },
  // 下次放鱼时间
  nexttime: {
    type: Sequelize.DATE
  },
  // 打折
  discount: {
    type: Sequelize.BOOLEAN
  },
  // 打折详情
  discountInfo: {
    type: Sequelize.STRING
  },
  // 活动
  event: {
    type: Sequelize.BOOLEAN
  },
  // 活动详情
  eventInfo: {
    type: Sequelize.STRING
  },
  // 赛事
  game: {
    type: Sequelize.BOOLEAN
  },
  // 赛事详情
  gameInfo: {
    type: Sequelize.STRING
  }
})

Shop.sync()

module.exports = Shop
