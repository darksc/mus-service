// 接口返回数据格式化
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
    console.log(error)
  }
}
