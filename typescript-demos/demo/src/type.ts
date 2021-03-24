let myFavoriteNumber: string | number = 'seven';
myFavoriteNumber = 7;

function getLength(something: string | number): string {
  return something.toString();
}

interface Person {
  readonly id: number; // 只读
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 885,
  name: 'Tom',
  age: 25,
  gender: 'male'
};

// tom.id = 58 // 不可修改