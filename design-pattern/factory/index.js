/**
 * name: 工厂模式
 * author: junhao
*/

class Creator {
  create(name) {
    return new Animal(name)
  }
}

class Animal {
  constructor(name) {
    this.name = name
  }
}

var creator = new Creator()

var duck = creator.create('Duck')
console.log(duck.name) // Duck

var chicken = creator.create('Chicken')
console.log(chicken.name) // Chicken

// 构造函数和创建者分离，对new操作进行封装
// 符合开放封闭原则