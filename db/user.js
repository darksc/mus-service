const Sequelize = require('sequelize')
const sequelize = require('./connect')

// 用户实体
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
