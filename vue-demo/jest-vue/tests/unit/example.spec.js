import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'
import setup from './setup'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld);
  it('should render correct contents', () => {
    expect(wrapper.find('.hello h1').text())
      .toEqual('Hello Jest');
  });
  it('测试inject的值是否准确', () => {
    expect(wrapper.find('.hello h2').isVisible())
      .toBe(false);
  });
  it(`正确的更新msg`, async () => {
    // 点击 button
    await wrapper.find('button').trigger('click')
    // 可以立即获取msg最新的值，不再需要wrapper.vm.$nextTick()
    expect(wrapper.find('h1').text())
      .toEqual('new message');
  });
});