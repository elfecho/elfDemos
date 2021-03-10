import Counter from './Counter';
describe('Counter 的测试代码', () => {
  let counter = null
  beforeAll(() => {
    console.log('beforeAll 全局执行初始化')
  })

  beforeEach(() => {
    counter = new Counter()
    console.log('beforeEach')
  })

  afterEach(() => {
    console.log('afterEach')
  })

  afterAll(() => {
    console.log('afterAll 所有测试用例执行完毕')
  })

  describe('测试增加相关的代码', () => {
    test('测试 Counter 中的 addOne 方法', () => {
      console.log('测试 Counter 中的 addOne 方法')
      counter.addOne();
      expect(counter.number).toBe(1);
    })
    test('测试 Counter 中的 addTwo 方法', () => {
      console.log('测试 Counter 中的 addTwo 方法')
      counter.addTwo();
      expect(counter.number).toBe(2);
    })
  })


  describe('测试减少相关的代码', () => {
    test('测试 Counter 中的 minusOne 方法', () => {
      console.log('测试 Counter 中的 minusOne 方法')
      counter.minusOne();
      expect(counter.number).toBe(-1);
    })
    test('测试 Counter 中的 minusTwo 方法', () => {
      console.log('测试 Counter 中的 minusTwo 方法')
      counter.minusTwo();
      expect(counter.number).toBe(-2);
    })
  })
})

