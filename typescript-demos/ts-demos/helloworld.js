var s = "hello ts";
var flag = true;
var count = 1;
// const red: Color = Color.RED;
// const pink: Color = Color.PINK;
// const blue: Color = Color.BLUE;
var color = [0 /* Color.RED */, 1 /* Color.PINK */, 2 /* Color.BLUE */];
console.log(color);
// console.log(red, pink, blue);
// 字符串枚举
var Color1;
(function (Color1) {
    Color1["RED"] = "\u7EA2\u8272";
    Color1["PINK"] = "\u7C89\u8272";
    Color1["BLUE"] = "\u84DD\u8272";
})(Color1 || (Color1 = {}));
var pink1 = Color1.PINK;
console.log(pink1); // 粉色
// Array 类型
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
// 元组
var tuple = [1, "zhangmazi"];
var tuple1 = [1, "haha", { a: 1 }];
// undefined 和 null
var a = undefined;
var b = null;
var str = "zhangmazi";
// str = null; // 编译错误
// str = undefined; // 编译错误
// any 类型
var value = 1;
value = "zhangmazi"; // 编译正确
value = []; // 编译正确
value = {}; // 编译正确
// void 类型
function sayHello() {
    console.log("hello 啊，豪哥！");
}
sayHello();
// never 类型
// 异常
function error(msg) {
    // 编译正确
    throw new Error(msg);
}
// 死循环
function loopForever() {
    // 编译正确
    while (true) { }
}
// loopForever();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function () {
        console.log("Hi, ".concat(this.name));
    };
    return Person;
}());
var x;
x = 1; // 编译正确
x = true; // 编译正确
// 类型断言
var str1 = "to be or not to be";
var strLength = str1.length; // 尖括号写法
var strLength1 = str1.length; // as 写法
console.log(strLength);
// 非空断言
var user;
console.log(user.toUpperCase()); // 编译正确
console.log(user.toUpperCase()); // 错误
// 确定赋值断言
// let value1: number;
// console.log(value1); // Variable 'value' is used before being assigned.
// let value1!: number;
// console.log(value1);
