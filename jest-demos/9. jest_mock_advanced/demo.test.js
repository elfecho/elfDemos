jest.mock('./demo'); // 模拟指向到__mocks__目录下的demo.js
// jest.unmock('./demo'); // 取消mock指向

import { fetchData } from './demo';
const { getNumber } = jest.requireActual('./demo');  // 引用真正的函数



test('fetchData 测试', () => {
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
});


test('getNumber 测试', () => {
  expect(getNumber()).toEqual(123)
});