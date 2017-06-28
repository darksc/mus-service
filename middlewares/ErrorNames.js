let ErrorNames = {}

// names 常量
ErrorNames.UNKNOW_ERROR = "unknowError"
ErrorNames.USER_NOT_EXIST = "userNotExist"

const error_map = new Map()

// 异常状态对象
error_map.set(ErrorNames.UNKNOW_ERROR, { code: -1, message: '未知错误' })
error_map.set(ErrorNames.USER_NOT_EXIST, { code: 101, message: '用户不存在' })

// 获取异常状态方法
ErrorNames.getErrorInfo = (error_name) => {
  let error_info
  if (error_name) {
    error_info = error_map.get(error_name)
  }
  if (!error_info) {
    error_name = ErrorNames.UNKNOW_ERROR
    error_info = error_map.get(error_name)
  }
  return error_info
}

module.exports = ErrorNames