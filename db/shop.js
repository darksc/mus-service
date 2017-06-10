/**
 * Created by darK on 2017/6/10.
 */
const Sequelize = require('sequelize')
const sequelize = require('./connect')

const Shop = sequelize.define('shops', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  },
  distance: {
    type: Sequelize.FLOAT
  },
  latitude: {
    type: Sequelize.FLOAT
  },
  longitude: {
    type: Sequelize.FLOAT
  },
  time: {
    type: Sequelize.DATE
  },
  nexttime: {
    type: Sequelize.DATE
  },
  discount: {
    type: Sequelize.BOOLEAN
  },
  discountInfo: {
    type: Sequelize.STRING
  },
  event: {
    type: Sequelize.BOOLEAN
  },
  eventInfo: {
    type: Sequelize.STRING
  },
  game: {
    type: Sequelize.BOOLEAN
  },
  gameInfo: {
    type: Sequelize.STRING
  }
})

Shop.sync().then(() => {
  return Shop
})

module.exports = Shop