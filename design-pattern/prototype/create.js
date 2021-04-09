/**
 * name: 原型模式
 * author: junhao
*/
var prototype = {
  name: 'Jack',
  getName: function () {
    return this.name
  }
}

var obj = Object.create(prototype, {
  job: {
    value: 'IT'
  }
})

console.log(obj.getName())  // Jack
console.log(obj.job)  // IT
console.log(obj.__proto__ === prototype)  //true