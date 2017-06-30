// 接口返回数据格式化
const ApiError = require('./ApiError')

module.exports = async (ctx, next) => {
  try {
    await next()
    if (ctx.body) {
      ctx.body = {
        code: 200,
        message: 'success',
        data: ctx.body
      }
    } else {
      ctx.body = {
        code: 200,
        message: 'success'
      }
    }
  } catch (error) {
    if(error instanceof ApiError){
      ctx.status = 200;
      ctx.body = {
        code: error.code,
        message: error.message
      }
    }
    throw error
  }
}