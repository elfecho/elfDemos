import { mount } from "@vue/test-utils";
import Password from "../../src/components/Password.vue";

describe("Password", () => {
  it("init", async () => {
    const wrapper = mount(Password, {
      props: {
        minLength: 10,
      },
    });
    await wrapper.get("input").setValue("hahaha");
    console.log(wrapper.text());
    expect(wrapper.text()).toContain("密码不能少于 10 位");

    expect(wrapper.find("[data-test='error']").exists()).toBe(true);

    await wrapper.setProps({
      minLength: 5,
    });

    expect(wrapper.find("[data-test='error']").exists()).toBe(false);
  });
});
