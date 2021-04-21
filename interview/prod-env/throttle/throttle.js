/**
 * description: 节流方法
 * fn: 接受的函数
 * delay: 延时时间
*/

function throttle(fn, delay = 300) {
  let timer = null;
  return function() {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}