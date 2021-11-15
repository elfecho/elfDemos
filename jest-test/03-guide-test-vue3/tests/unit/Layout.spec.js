import { mount } from "@vue/test-utils";
import Layout from "../../src/components/Layout.vue";
// import Bar from "@/components/Bar.vue";
import { h } from "@vue/runtime-core";

describe("Layout.vue", () => {
  it("default", () => {
    const wrapper = mount(Layout, {
      slots: {
        default: "default div",
      },
    });

    expect(wrapper.text()).toContain("default div");
  });

  it("多个slot值", () => {
    const wrapper = mount(Layout, {
      slots: {
        default: ["<div id='one'>one</div>", "<div id='two'>two</div>"],
      },
    });

    expect(wrapper.find("#one").text()).toContain("one");
    expect(wrapper.find("#two").text()).toContain("two");
  });

  it("具名插槽", () => {
    const wrapper = mount(Layout, {
      slots: {
        header: "<div>header</div>",
        footer: "footer",
      },
    });

    expect(wrapper.find("header").text()).toContain("header");
    expect(wrapper.find("footer").text()).toContain("footer");
  });

  it("作用域插槽", () => {
    const wrapper = mount(Layout, {
      slots: {
        header: `
          <template #header="data">
            hello {{data.msg}}
          </template>
        `,
      },
    });
    expect(wrapper.find("header").text()).toContain("hello message");
  });

  // string
  // div

  it("高级用法", () => {
    const wrapper = mount(Layout, {
      slots: {
        // default: "Bar",
        // default: "<div>Bar</div>",
        // default: Bar,
        // default: {
        //   template: "<div>Bar</div>",
        // },
        default: h("div", "Bar"),
      },
    });
    console.log(wrapper.html());
    expect(wrapper.text()).toContain("Bar");
  });
});
