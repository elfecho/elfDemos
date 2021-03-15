// const { effect, reactive } = require('@vue/reactivity')
// const { effectWatch, reactive } = require('./core/reactivity');
import { effectWatch, reactive } from './core/reactivity/index.js'
import { h } from './core/h.js';
// v3
// 声明一个响应式对象
// let a = reactive({
//   value: 10
// });
// let b;
// effectWatch(() => {
//   // 函数
//   // 1. 定执行以下代码
//   b = a.value + 10;
//   console.log(b)
// });
// // a 响应式对象的值发生改变之后
// a.value = 30

// vue3



export default {
  render(context) {
    // 构建 view = b
    // view -> 每次都需要重新的创建
    // 要计算出最小的更新点 -> vdom
    // js ——> diff

    return h(
      'div', 
      {
        id: 'app - 0',
        clas: 'showTime'
      },
      [
        h('p', null, String(context.state.count))
      ]
    )


  },
  setup() {
    // a = 响应式数据
    let state = reactive({
      count: 0
    })
    window.state = state;
    return {
      state
    }

  }
}


