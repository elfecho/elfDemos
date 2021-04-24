// const arr = [10, 20, 30, 40]

// pop
// const popRes = arr.pop() // 40
// console.log(popRes, arr)

// push
// const pushRes = arr.push(50) // length
// console.log(pushRes, arr)

// unshift
// const unshiftRes = arr.unshift(5) // length
// console.log(unshiftRes, arr)


// shift
// const shiftRes = arr.shift() // 10
// console.log(shiftRes, arr)



// 纯函数：1. 不改变原数组（没有副作用）； 2. 返回一个数组
// const arr = [10, 20, 30, 40]

// // concat
// const arr1 = arr.concat([50, 60, 70])
// console.log(arr1)

// // map
// const arr2 = arr.map(num => num * 10)
// console.log(arr2)

// // filter
// const arr3 = arr.filter(num => num > 25)
// console.log(arr3)

// // slice
// const arr4 = arr.slice(3)
// console.log(arr4)

// 非纯函数 
// pop push unshift shift
// foreach
// some every
// reduce

// const arr = [10, 20, 30, 40, 50]

// // slice 纯函数
// const arr1 = arr.slice()
// const arr2 = arr.slice(1, 4)
// const arr3 = arr.slice(2)
// const arr4 = arr.slice(-2) 
// console.log(arr1, arr2, arr3, arr4)

// // splice 非纯函数
// const spliceRes = arr.splice(1, 2, 'a', 'b', 'c')
// // const spliceRes1 = arr.splice(1, 2)
// // const spliceRes2 = arr.splice(1, 0, 'a', 'b', 'c')
// console.log(spliceRes, arr)


const res = [10, 20, 30].map(parseInt)
console.log(res)

// 拆解
[10, 20, 30].map((item, index) => {
  return parseInt(item, index)
})
