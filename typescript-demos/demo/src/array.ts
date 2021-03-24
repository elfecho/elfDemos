
let fibonacci: number[] = [1, 1, 2, 3, 5];

// let fibonacci: number[] = [1, '1', 2, 3, 5];

// fibonacci.push('8') push 方法只允许传入 number 类型的参数，但是却传了一个 "8" 类型的参数，所以报错了

let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

interface NumberArray {
  [index: number]: number;
}

let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

interface IArguments {
  [index: number]: number;
  length: number;
  callee: Function;
}

function sum() {
  let args: IArguments = arguments;
}

let list: any[] = [
  'xcat',
  {
    website: 'http://baidu.com'
  }
]

