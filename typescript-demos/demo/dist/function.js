"use strict";
function sum5(x, y) {
    return x + y;
}
sum5(1, 8);
function sum2(x, y) {
    return x + y;
}
sum2(1, 2);
let mySum = function (x, y) {
    return x + y;
};
let mySum2 = (x, y) => {
    return x + y;
};
let mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// function buildName(firstName: string, lastName?: string) {
//   if (lastName) {
//       return firstName + ' ' + lastName;
//   } else {
//       return firstName;
//   }
// }
// let tomcat = buildName('Tom', 'Cat');
// let toms = buildName('Tom');
// function buildName(firstName?: string, lastName: string) { // 必选参数不能位于可选参数后
//   if (firstName) {
//       return firstName + ' ' + lastName;
//   } else {
//       return lastName;
//   }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName(undefined, 'Tom');
function buildName(firstName, lastName = "Cat") {
    return firstName + " " + lastName;
}
let tomcat = buildName("Tom", "Cat");
let tom2 = buildName("Tom");
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else {
        return x.split("").reverse().join("");
    }
}
reverse('hello');
