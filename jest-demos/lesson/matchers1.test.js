// string
test('toMatch', () => {
  const str = 'hello world';
  expect(str).toMatch(/world/);
})

// Array, Set
test('toContain', () => {
  const arr = ['hello', 'world'];
  expect(arr).toContain('hello');
  expect(new Set(arr)).toContain('hello');
})


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