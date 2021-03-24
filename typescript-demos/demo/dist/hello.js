"use strict";
function sayHello(person) {
    return 'Hello, ' + person;
}
let user = 'tom';
console.log(sayHello(user));
let isDone = false;
let createByNewBoolean = Boolean(true);
// number
let decLiteral = 6;
let hexLiteral = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral = 0b1010;
// ES6 中的八进制表示法
let octalLiteral = 0o744;
let notANumber = NaN;
let infinityNumber = Infinity;
// string
let myName = 'Tom';
let myAge = 25;
// 模板字符串
let sentence = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
// 空值
function alertName() {
    alert('My name is Tom');
}
let unusable = undefined;
// Null 和 Undefined
let u = undefined;
let n = null;
// let num: number = undefined;
// let u: void;
// let num: number = u;
// 任意值
// let myFavoriteNumber: any = 'seven';
// myFavoriteNumber = 7;
let anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
