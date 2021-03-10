// test('测试10与10相匹配', () => {
//   // toBe 匹配器 matchers Objest.is === 
//   const a = { b: 1 }
//   expect(a).toBe({b: 1});
// })

// test('测试对象内容相等', () => {
//   // toEqual 匹配器
//   const a = { b: 1 }
//   expect(a).toEqual({ b: 1 });
// })

// 真假有关的匹配器
// test('toBeNull 匹配器', () => {
//     const a = null
//     expect(a).toBeNull();
//   })

// test('toBeUndefined 匹配器', () => {
//   const a = undefined
//   expect(a).toBeUndefined();
// })

// test('toBeDefined 匹配器', () => {
//   const a = 1
//   expect(a).toBeDefined();
// })

// test('toBeTruthy 匹配器', () => {
//   const a = 1
//   expect(a).toBeTruthy();
// })

// test('toBeFalsy 匹配器', () => {
//   const a = 0
//   expect(a).toBeFalsy();
// })

// test('not 匹配器', () => {
//   const a = 1
//   expect(a).not.toBeFalsy();
// })


// test('not 匹配器', () => {
//   const a = 1
//   expect(a).not.toBeFalsy();
// })


// 数字相关的匹配器
// test('Number 匹配器', () => {
//   const count = 10
//   expect(count).toBeGreaterThan(9);
//   expect(count).toBeLessThan(11);
//   expect(count).toBeGreaterThanOrEqual(10);
//   expect(count).toBeLessThanOrEqual(10);
// })

// test('adding floating point numbers', () => {
//   const value = 0.1 + 0.2;
//   //expect(value).toBe(0.3);           This won't work because of rounding error
//   expect(value).toBeCloseTo(0.3); // This works.
// });

// string
// test('toMatch', () => {
//   const str = 'hello world';
//   expect(str).toMatch(/world/);
// })

// Array, Set
// test('toContain', () => {
//   const arr = ['hello', 'world'];
//   expect(arr).toContain('hello');
//   expect(new Set(arr)).toContain('hello');
// })


// 异常
const throwNewErrorFunc = function() {
  throw new Error('this is a new error.')
}
test('toThrow', () => {
  expect(throwNewErrorFunc).toThrow();
  expect(throwNewErrorFunc).toThrow(Error);

  // 如果你想判断错误的提示信息是否匹配
  expect(throwNewErrorFunc).toThrow('this is a new error.');
  expect(throwNewErrorFunc).toThrow(/error/);
})