import timer from './timer';

beforeEach(() => {
  jest.useFakeTimers();
})
afterAll(() => {
  jest.clearAllTimers(); // 清除计时器
})

test('timer 测试', () => {
  const fn = jest.fn();
  timer(fn);
  // jest.runAllTimers(); // 运行所有的定时器
  // jest.runOnlyPendingTimers(); // 只执行外层的一个定时器任务
  jest.advanceTimersByTime(3000); // 让时间快进3000毫秒
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);

})

test('timer2 测试', () => {
  const fn = jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000); // 让时间快进3000毫秒
  expect(fn).toHaveBeenCalledTimes(1);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(2);

})