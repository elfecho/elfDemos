let exam = {
  name: 'Tom',
  age: 26,
  get info() {
    return this.name + this.age;
  },
  set info(value) {
    return this.age = value;
  }
}

// Reflect.get(target, name, receiver) 查找并返回 target 对象的 name 属性。

const name = Reflect.get(exam, 'name');

// 当 target 对象中存在 name 属性的 getter 方法， getter 方法的 this 会绑定 // receiver
let receiver = {
  name: 'Jerry',
  age: 20
}

const info = Reflect.get(exam, 'info', receiver);

// 当 name 为不存在于 target 对象的属性时，返回 undefined
const birth = Reflect.get(exam, 'birth'); // undefined


// 当 target 不是对象时，会报错
// try {
//   Reflect.get(1, 'name'); // TypeError
// } catch (error) {
//   console.log(error)
// }

// Reflect.set(target, name, value, receiver) 
// 将 target 的 name 属性设置为 value。返回值为 boolean ，true 表示修改成功，false 表示失败。当 target 为不存在的对象时，会报错。

exam.age; // 26
Reflect.set(exam, 'age', 25); // true
exam.age; // 25

// value 为空时会将 name 属性清除
Reflect.set(exam, 'age',); // true
exam.age; // undefined


// 当 target 对象中存在 name 属性 setter 方法时，setter 方法中的 this 会绑定 // receiver , 所以修改的实际上是 receiver 的属性,
receiver = {
  age: 18
}
Reflect.set(exam, 'info', 1, receiver); // true
receiver.age; // 1

let receiver1 = {
  name: 'oppps'
}
Reflect.set(exam, 'info', 1, receiver1);
receiver1.age;


// Reflect.has(obj, name)  是 name in obj 指令的函数化，用于查找 name 属性在 obj 对象中是否存在。返回值为 boolean。如果 obj 不是对象则会报错 TypeError

const has = Reflect.has(exam, 'name')


// Reflect.deleteProperty(obj, property)
// 是 delete obj[property] 的函数化，用于删除 obj 对象的 property 属性，返回值为 boolean。如果 obj 不是对象则会报错 TypeError。

const deletePro = Reflect.deleteProperty(exam , 'name'); // true
// exam // {age: 24} 
// property 不存在时，也会返回 true
const deletePro2 = Reflect.deleteProperty(exam , 'name'); // true

// Reflect.construct(obj, args) 等同于 new target(…args)。

function examFn(name){
    this.name = name;
}
Reflect.construct(examFn, ['Tom']); // exam {name: "Tom"}


// Reflect.getPrototypeOf(obj)
// 用于读取 obj 的 _proto_ 属性。在 obj 不是对象时不会像 Object 一样把 obj 转为对象，而是会报错。

class ExamClass{}
let obj = new ExamClass()
const proto = Reflect.getPrototypeOf(obj) === ExamClass.prototype // true

// Reflect.setPrototypeOf(obj, newProto)
// 用于设置目标对象的 prototype。

let obj2 ={}
Reflect.setPrototypeOf(obj2, Array.prototype); // true
obj2.push(1);

// Reflect.apply(func, thisArg, args)
// 等同于 Function.prototype.apply.call(func, thisArg, args) 。func 表示目标函数；thisArg 表示目标函数绑定的 this 对象；args 表示目标函数调用时传入的参数列表，可以是数组或类似数组的对象。若目标函数无法调用，会抛出 TypeError 。

const max = Reflect.apply(Math.max, Math, [1, 3, 5, 3, 1]); // 5
const max2 = Function.prototype.apply.call(Math.max, Math, [1, 3, 5, 3, 1]);

// Reflect.defineProperty(target, propertyKey, attributes)
// 用于为目标对象定义属性。如果 target 不是对象，会抛出错误。

let myDate= {}
Reflect.defineProperty(myDate, 'now', {
  value: () => Date.now()
}); // true
 
const student = {};
Reflect.defineProperty(student, "name", {value: "Mike"}); // true
// student.name; // "Mike"

//