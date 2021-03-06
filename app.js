const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const compress = require('koa-compress')

const response = require('./middlewares/response')

const index = require('./routes/index')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
// 日志处理
app.use(logger())
// 静态文件
app.use(require('koa-static')(__dirname + '/public'))
// 跨域
app.use(cors())
// 开启 Gzip
app.use(compress())

// logger
app.use(async (ctx, next) => {
  try {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  } catch (error) {
    console.log(error)
  }

})

// 格式化 和 自定义异常
app.use(response)

// routes
app.use(index.routes(), index.allowedMethods())

module.exports = app
