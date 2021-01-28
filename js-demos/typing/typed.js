(function () {
  // 获取容器 方法一
  const container = document.getElementById('content1')
  // 把需要展示的全部文字进行切割
  const data = '最简单的打字机效果实现'.split('')
  // 需要追加到容器中的文字下标
  let index = 0
  function writing() {
    if (index < data.length) {
      // 追加文字
      container.innerHTML += data[index ++]
      let timer = setTimeout(writing, 200)
      console.log(timer) // 这里会依次打印 1 2 3 4 5 6 7 8 9 10
    }
  }
  writing()
})();
(function() {
  // 获取容器 方法二
  const container = document.getElementById('content2')
  // 把需要展示的全部文字进行切割
  const data = '最简单的打字机效果实现'.split('')
  // 需要追加到容器中的文字下标
  let index = 0
  let timer = null
  function writing() {
    if (index < data.length) {
      // 追加文字
      container.innerHTML += data[index ++]
      // 没错，也可以通过，clearTimeout取消setInterval的执行
      // index === 4 && clearTimeout(timer)
    } else {
      clearInterval(timer)
    }
    console.log(timer) // 这里会打印出 1 1 1 1 1 ...
  }
  // 使用 setInterval 时，结束后不要忘记进行 clearInterval
  timer = setInterval(writing, 1000/60)
})();
(function () {
  // 获取容器 方法三
  const container = document.getElementById('content3')
  const data = '与 setTimeout 相比，requestAnimationFrame 最大的优势是 由系统来决定回调函数的执行时机。具体一点讲就是，系统每次绘制之前会主动调用 requestAnimationFrame 中的回调函数，如果系统绘制率是 60Hz，那么回调函数就每16.7ms 被执行一次，如果绘制频率是75Hz，那么这个间隔时间就变成了 1000/75=13.3ms。换句话说就是，requestAnimationFrame 的执行步伐跟着系统的绘制频率走。它能保证回调函数在屏幕每一次的绘制间隔中只被执行一次，这样就不会引起丢帧现象，也不会导致动画出现卡顿的问题。'.split('')
  let index = 0
  function writing() {
    if (index < data.length) {
      container.innerHTML += data[index ++]
      requestAnimationFrame(writing)
    }
  }
  writing()
})();