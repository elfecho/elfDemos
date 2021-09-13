import { mount } from "@vue/test-utils";
import Counter from "../../src/components/Counter.vue";
describe("Counter.vue", () => {
  it("emit event Increment", () => {
    const wrapper = mount(Counter);

    wrapper.get("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("increment");
    expect(wrapper.emitted("increment")).toBeTruthy();
  });

  // it("emit value", () => {
  //   const wrapper = mount(Counter);

  //   wrapper.get("button").trigger("click");
  //   wrapper.get("button").trigger("click");
  //   expect(wrapper.emitted("increment")[0]).toEqual([1]);
  //   expect(wrapper.emitted("increment")[1]).toEqual([2]);
  //   // expect(wrapper.emitted()).toHaveProperty("increment");
  //   // expect(wrapper.emitted("increment")).toBeTruthy();
  // });
  it("emit value object", () => {
    const wrapper = mount(Counter);

    wrapper.get("button").trigger("click");
    wrapper.get("button").trigger("click");
    expect(wrapper.emitted("increment")[0]).toEqual([
      {
        count: 1,
        even: false,
      },
    ]);
    expect(wrapper.emitted("increment")[1]).toEqual([
      {
        count: 2,
        even: true,
      },
    ]);
    // expect(wrapper.emitted()).toHaveProperty("increment");
    // expect(wrapper.emitted("increment")).toBeTruthy();
  });
});
