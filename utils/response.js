/**
 * Created by darK on 2017/6/19.
 */


/**
 * api 统一返回格式
 * @param code     返回状态码
 * @param success  返回成功状态
 * @param data     返回数据
 * @returns {{code: *, success: *, data: *}}
 */
const buildRes = function (code, success, data) {
  return {
    code: code,
    success: success,
    data: data
  }
}

export default {
  buildRes
}