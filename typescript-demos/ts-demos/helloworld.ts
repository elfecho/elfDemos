const s: string = "hello ts";
const flag: boolean = true;
const count: number = 1;
// console.log(s);
// console.log(flag);
// console.log(count);

// 设置初始值
const enum Color {
  RED,
  PINK,
  BLUE,
}

// const red: Color = Color.RED;
// const pink: Color = Color.PINK;
// const blue: Color = Color.BLUE;
const color: Color[] = [Color.RED, Color.PINK, Color.BLUE];
console.log(color);
// console.log(red, pink, blue);

// 字符串枚举
enum Color1 {
  RED = "红色",
  PINK = "粉色",
  BLUE = "蓝色",
}

const pink1: Color1 = Color1.PINK;
console.log(pink1); // 粉色

// Array 类型
const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// 元组
const tuple: [number, string] = [1, "zhangmazi"];
const tuple1: any[] = [1, "haha", { a: 1 }];

// undefined 和 null
let a: undefined = undefined;
let b: null = null;

let str: string = "zhangmazi";
// str = null; // 编译错误
// str = undefined; // 编译错误

// any 类型
let value: any = 1;
value = "zhangmazi"; // 编译正确
value = []; // 编译正确
value = {}; // 编译正确

// void 类型
function sayHello(): void {
  console.log("hello 啊，豪哥！");
}

sayHello();

// never 类型
// 异常
function error(msg: string): never {
  // 编译正确
  throw new Error(msg);
}

// 死循环
function loopForever(): never {
  // 编译正确
  while (true) {}
}
// loopForever();

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi(): void {
    console.log(`Hi, ${this.name}`);
  }
}

let x;
x = 1; // 编译正确
x = true; // 编译正确

// 类型断言
let str1: any = "to be or not to be";
let strLength: number = (<string>str1).length; // 尖括号写法
let strLength1: number = (str1 as string).length; // as 写法

console.log(strLength);

// 非空断言
let user: string | null | undefined;
// console.log(user!.toUpperCase()); // 编译正确
// console.log(user.toUpperCase()); // 错误

// 确定赋值断言
// let value1: number;
// console.log(value1); // Variable 'value' is used before being assigned.
let value1!: number;
console.log(value1);

// 联合类型
let status1: string | number;
status1 = "to be or not to be";
status1 = 1;
console.log("status1", status1);

// 类型别名
type count = number | number[];
function hello(value: count) {}

hello([233]);

// 交叉类型
// interface IpersonA {
//   name: string;
//   age: number;
// }
// interface IpersonB {
//   name: string;
//   gender: string;
// }

// let person: IpersonA & IpersonB = {
//   name: "师爷",
//   age: 18,
//   gender: "男",
// };

interface IpersonA {
  name: string;
}

interface IpersonB {
  name: number;
}

function testAndFn(params: IpersonA & IpersonB) {
  console.log(params);
}

testAndFn({
  name: (() => {
    throw new Error("Throw my hands in the air like I just dont care");
  })(),
}); // error TS2322: Type 'string' is not assignable to type 'never'.
