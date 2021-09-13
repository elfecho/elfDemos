import { mount } from "@vue/test-utils";
import IfFoo from "../../src/components/IfFoo.vue";
describe("ifFoo", () => {
  it("获取 a 标签", () => {
    const wrapper = mount(IfFoo);
    const profile = wrapper.get("#profile");

    expect(profile.text()).toBe("My Profile");
  });

  it("看看一个元素是否存在", () => {
    const wrapper = mount(IfFoo);
    const admin = wrapper.find("#admin");

    expect(admin.exists()).toBe(false);
  });

  it("存在", () => {
    const wrapper = mount(IfFoo, {
      data() {
        return {
          admin: true,
        };
      },
    });
    // const wrapper = shallowMount(IfFoo);
    // wrapper.setData({
    //   admin: true,
    // });
    const admin = wrapper.find("#admin");
    expect(admin.exists()).toBe(true);
  });

  it("是不是显示了", () => {
    const wrapper = mount(IfFoo);
    // find
    const admin = wrapper.find("#user-dropdown");
    expect(admin.isVisible()).toBe(false);
  });
});
