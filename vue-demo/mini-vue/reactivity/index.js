// const { effect, reactive } = require('@vue/reactivity')
// const { effectWatch, reactive } = require('./core/reactivity');
import { effectWatch, reactive } from './core/reactivity/index.js'

// v3
// 声明一个响应式对象
let a = reactive({
  value: 10
});
let b;
effectWatch(() => {
  // 函数
  // 1. 定执行以下代码
  b = a.value + 10;
  console.log(b)
});
// a 响应式对象的值发生改变之后
a.value = 30

