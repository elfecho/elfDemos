const input1 = document.getElementById('input1')
// let timer
// input1.addEventListener('keyup', () => {
//   if (timer) {
//     clearTimeout(timer)
//   }
//   timer = setTimeout(() => {
//     console.log(input1.value)
//     // 清空定时器
//     timer = null
//   }, 500)
// })

input1.addEventListener('keyup', debounce(() => {
  console.log(input1.value)
}), 600)