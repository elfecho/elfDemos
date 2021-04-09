/**
 * name: 迭代器模式
 * author: junhao
*/

class Creater {
  constructor(list) {
    this.list = list
  }

  // 创建一个迭代器，也叫遍历器
  createIterator() {
    return new Iterator(this)
  }
}

class Iterator {
  constructor(creater) {
    this.list = creater.list
    this.index = 0
  }

  // 判断是否遍历完数据
  isDone() {
    if (this.index >= this.list.length) {
      return true
    }
    return false
  }

  next() {
    return this.list[this.index++]
  }

}

var arr = [1, 2, 3, 4]

var creater = new Creater(arr)
var iterator = creater.createIterator()
console.log(iterator.list)  // [1, 2, 3, 4]
while (!iterator.isDone()) {
  console.log(iterator.next())
  // 1
  // 2
  // 3
  // 4
}


var arr = [1, 2, 3, 4]

var iterator = arr[Symbol.iterator]()

console.log(iterator.next())  // {value: 1, done: false}
console.log(iterator.next())  // {value: 2, done: false}
console.log(iterator.next())  // {value: 3, done: false}
console.log(iterator.next())  // {value: 4, done: false}
console.log(iterator.next())  // {value: undefined, done: true}