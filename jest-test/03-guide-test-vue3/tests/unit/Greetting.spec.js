import Greetting from '../../src/components/Greetting.vue'
import { mount } from '@vue/test-utils'
describe('Greetting', () => {
  it('display', () => {
    const wrapper = mount(Greetting)
    expect(wrapper.text()).toMatch('Vue without TDD')
  });
})
