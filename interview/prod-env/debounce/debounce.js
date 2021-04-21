/**
 * description: 防抖函数
 * fn: 接受的函数
 * delay: 延时时间
*/
function debounce(fn, delay = 500) {
  // timer 是闭包中的
  let timer = null
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}