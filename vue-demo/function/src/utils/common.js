// 防抖
function debounce(f, wait) {
  let timer
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f(arguments)
    }, wait)
  }
}
// 节流
// function throttle(f, wait) {
//   let timer
//   return (...args) => {
//     if (timer) { return }
//     timer = setTimeout(() => { f(...args); timer = null }, wait)
//   }
// }
// 节流返回this
const throttle = (fn, gapTime) => {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  }
  let _lastTime = null
  // 返回新的函数
  return function () {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments) //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}

export {
  debounce,
  throttle
}