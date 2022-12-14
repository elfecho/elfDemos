// 需求
// let obj1 = {a: 1, b: 2, {c: 3}}
// let obj2 = {a: 1, b: 2, {c: 3}}
// isEqual(obj1, obj2) === true

// 判断是否是对象或数组
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型 （注意 参与 equal 的一般不会是函数）
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  // 两个都是对象或数组，而且不相等
  // 1. 先取出 obj1 和 obj2 的keys，比较个数
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if(obj1Keys.length !== obj2Keys.length) {
    return false
  }
  // 以 obj1 为基准，和 obj2 一次递归比较
  for (let key in obj1) {
    // 比较当前key 的 val ———— 递归
    const res = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }
  return true
}
// 测试
let obj1 = { a: 1, b: 2, c: {d: 1} }
let obj2 = { a: 1, b: 2, c: {d: 1} }
console.log(isEqual(obj1, obj2))