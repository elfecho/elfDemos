import { mount, shallowMount } from "@vue/test-utils";
import Foo from "../../src/components/Foo.vue";
describe("Foo.vue", () => {
  it("mount", () => {
    const wrapper = mount(Foo);
    console.log(wrapper.html());
  });

  it("shallowMount", () => {
    const wrapper = shallowMount(Foo);
    console.log(wrapper.html());
  });
});
