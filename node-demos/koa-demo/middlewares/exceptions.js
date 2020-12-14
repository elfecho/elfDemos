
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // error 堆栈调用信息
    // error 简化 清晰明了的信息 给前端
    // HTTP Status Code 2xx 4xx 5xx
    ctx.body = '服务器有点异常'
  }
}
module.exports = catchError