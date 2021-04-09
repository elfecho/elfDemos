// 1. 方法继承

var Parent = function () { }
Parent.prototype.show = function () {
  console.log('abc')
}
var Child = function () { }

// Child继承Parent的所有原型方法
Child.prototype = new Parent()
const child = new Child()
child.show()


// 2. 所有函数默认继承Object
var Foo = function () { }
console.log(Foo.prototype.__proto__ === Object.prototype) // true

// Object.create
var proto = { a: 1 }
var propertiesObject = {
  b: {
    value: 2
  }
}
var obj = Object.create(proto, propertiesObject)
console.log(obj.__proto__ === proto)  // true
console.log(obj.b) // 2


var obj = {}
var prototypeObj = {}
Object.setPrototypeOf(obj, prototypeObj)
console.log(obj.__proto__ === prototypeObj) // true

//