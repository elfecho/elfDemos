function sum5(x: number, y: number) {
  return x + y;
}

sum5(1, 8);

function sum2(x: number, y: number): number {
  return x + y;
}

sum2(1, 2);

let mySum = function (x: number, y: number): number {
  return x + y;
};

let mySum2: (x: number, y: number) => number = (
  x: number,
  y: number
): number => {
  return x + y;
};

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
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

function buildName(firstName: string, lastName: string = "Cat") {
  return firstName + " " + lastName;
}
let tomcat = buildName("Tom", "Cat");
let tom2 = buildName("Tom");

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else {
    return x.split("").reverse().join("");
  }
}
reverse('hello')