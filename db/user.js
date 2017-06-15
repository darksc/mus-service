/**
 * Created by darK on 2017/6/10.
 */
const Sequelize = require('sequelize')
const sequelize = require('./connect')

const User = sequelize.define('users', {
  // 唯一标识
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  // 名称
  name: {
    type: Sequelize.STRING
  },
  // 微信 openid
  openId: {
    type: Sequelize.STRING
  }
})

User.sync()

module.exports = User
