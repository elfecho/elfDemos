import { runCallback, createObject, getData } from './demo';
import axios from 'axios';
jest.mock('axios'); // jest对axios进行模拟，这样不会真正发送axios请求


test('测试 runCallback', () => {
  // function func() {
  //   return 'hello'
  // }
  // expect(runCallback(func)).toBe('hello'); // 这里需要改demo runCallback 返回return
  const func = jest.fn(); // mock 函数 1. 捕获函数的调用和返回结果以及this的调用顺序
  // func.mockReturnValueOnce('hello').mockReturnValueOnce('world').mockReturnValueOnce('!')
  func.mockReturnValue('hello') // 2. 自由的设置返回结果
  runCallback(func);
  runCallback(func);
  runCallback(func);
  // expect(func).toBeCalled();
  expect(func.mock.calls.length).toBe(3)
  expect(func.mock.calls[0]).toEqual(['abc'])
  // expect(func.mock).toBeCalledWith('abc') // 每次匹配的都是 'abc'

  expect(func.mock.results[0].value).toBe('hello')
  // console.log(func.mock); 
  // { calls: [ [ 'abc' ], [ 'abc' ], [ 'abc' ] ],
  // instances: [ undefined, undefined, undefined ],
  // invocationCallOrder: [ 1, 2, 3 ],
  // results:
  //  [ { type: 'return', value: 'hello' },
  //    { type: 'return', value: 'hello' },
  //    { type: 'return', value: 'hello' } ] }
})

test('测试 runCallback mock', () => {
  const func = jest.fn()
  // func.mockImplementation(() => { return 'hello' }) 相当于 jest.fn(() => {return 'hello'})
  func.mockImplementationOnce(() => {
    return 'hello'
  }).mockImplementationOnce(() => {
    return 'world'
  })
  runCallback(func);
  runCallback(func);
  console.log(func.mock);
  expect(func.mock.results[0].value).toBe('hello');
  expect(func.mock.results[1].value).toBe('world');

})

test('测试 createObject', () => {
  const func = jest.fn();
  createObject(func);
  console.log(func.mock, func.mock.instances[0].name); 
  // { calls: [ [] ],
  //   instances: [ mockConstructor {} ],
  //   invocationCallOrder: [ 1 ],
  //   results: [ { type: 'return', value: undefined } ] }
})

test('测试 getData', async () => {
  // 3. mock 改变函数的内部实现
  // axios.get.mockResolvedValue({data: 'hello'});
  axios.get.mockResolvedValueOnce({data: 'hello'}); // 模拟返回数据
  axios.get.mockResolvedValueOnce({data: 'world'}); // 模拟返回数据
  await getData().then(data => {
    expect(data).toBe('hello');
  })
  await getData().then(data => {
    expect(data).toBe('world');
  })
})