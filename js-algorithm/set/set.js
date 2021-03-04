let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // 这里5重复添加，在Set中自动被过滤
mySet.add('some text')
let o = { a: 1, b: 2 };
mySet.add(o);
// 这里可以重复添加对象，是因为对象指向的内存不同，所以看着是一样的对象可以添加两个
mySet.add({ a: 1, b: 2 }); 

const has = mySet.has(5);

mySet.delete(5);

for(let [key, value] of mySet.entries()) console.log(key, value);

const myArr = [...mySet];
const myArr2 = Array.from(mySet);

const mySet2 = new Set([1,2,2,3]);

// 求交集
const intersection = new Set([...mySet].filter(item => mySet2.has(item)));
// 求差集
const difference = new Set([...mySet].filter(item => !mySet2.has(item)));
//