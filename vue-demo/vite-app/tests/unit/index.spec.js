import { foo } from './foo';

test("1+1=2", () => {
  console.log(foo())
  expect(1+1).toBe(2)
})