interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function getName(animal: Cat | Fish) {
  return animal.name;
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
      return true;
  }
  return false;
}

function swim(animal: Cat | Fish) {
  (animal as Fish).swim(); // 这里不要滥用类型断言
}

const tom3: Cat = {
  name: 'Tom',
  run() { console.log('run') }
};

// swim(tom3); // 在Cat上找不到swim,编译时不报错，运行时报错

class ApiError extends Error {
  code: number = 0;
}
class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError(error: Error) {
  // if (typeof (error as ApiError).code === 'number') {
  //     return true;
  // }
  if (error instanceof ApiError) {
    return true;
  }
  return false;
}

// (window as any).foo = 1;


interface Cat {
  run(): void;
}
interface Fish {
  swim(): void;
}

function testCat(cat: Cat) {
  return (cat as any as Fish); // 双重断言
}

function toBoolean(something: any): boolean {
  return Boolean(something);
}

console.log(toBoolean(1));

// 类型断言 vs 类型声明
// function getCacheData(key: string): any {
//   return (window as any).cache[key];
// }

// interface Cat {
//   name: string;
//   run(): void;
// }

// const tom4 = getCacheData('tom') as Cat;
// tom4.run();

interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

const animal: Animal = {
  name: 'tom'
};
let tom666 = animal as Cat;

const a = new AnimalClass('5')

a.sayHi()
