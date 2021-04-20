import {fn, name, obj} from './a'
import {fn as fnB, name as nameB, obj as objB} from './b'
import * as xxx from './c'
fn()
console.log('a----', name, obj)

fnB()
console.log('b----', nameB, objB)

console.log(xxx.default, xxx.nameC)

console.log(100)

// const sum = (a, b) => a + b

// const res = sum(10, 20)
// console.log(res)


// class Student {
//   constructor(name, number) {
//       this.name = name
//       this.number = number
//       // this.gender = 'male'
//   }
//   sayHi() {
//       console.log(
//           `姓名 ${this.name} ，学号 ${this.number}`
//       )
//       // console.log(
//       //     '姓名 ' + this.name + ' ，学号 ' + this.number
//       // )
//   }
//   // study() {

//   // }
// }

// // 通过类 new 对象/实例
// const xialuo = new Student('夏洛', 100)
// console.log(xialuo.name)
// console.log(xialuo.number)
// xialuo.sayHi()