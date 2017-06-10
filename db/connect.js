/**
 * Created by darK on 2017/6/10.
 */
const Sequelize = require('sequelize')

const sequelize = new Sequelize('mus', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

module.exports = sequelize