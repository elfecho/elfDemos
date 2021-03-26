import {foo} from './foo'
import { mount } from '@vue/test-utils'
import Foo from '../../src/components/Foo.vue'

test("1+1=2", () => {
  // console.log(mount(Foo))
  console.log(foo())
  expect(1+1).toBe(2)
})