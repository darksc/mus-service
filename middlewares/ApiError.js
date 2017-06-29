// 拓展异常类
const ErrorNames = require('./ErrorNames')
module.exports = class ApiErrors extends Error{
  constructor(error_name){
    super()
    let error_info = ErrorNames.getErrorInfo(error_name)
    this.name = error_name
    this.code = error_info.code
    this.message = error_info.message
  }
}