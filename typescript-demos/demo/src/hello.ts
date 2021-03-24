function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'tom';
console.log(sayHello(user));

let isDone: boolean = false;

let createByNewBoolean: boolean = Boolean(true);

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// string
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// 空值
function alertName(): void {
  alert('My name is Tom');
}

let unusable: void = undefined;

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

// let num: number = undefined;

// let u: void;
// let num: number = u;

// 任意值
// let myFavoriteNumber: any = 'seven';
// myFavoriteNumber = 7;

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);