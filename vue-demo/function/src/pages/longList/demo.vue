<template>
  <div class="content" ref="content">
    <virtual-list
      :keeps='60'
      :estimate-size='20'
      style="height: 360px; overflow-y: auto;"
      :data-key="'id'"
      :data-sources="items"
      :data-component="itemComponent"
    />
  </div>
</template>

<script>
import virtualList from "vue-virtual-scroll-list";
import Item from "./Item";
export default {
  components: { "virtual-list": virtualList },
  name: "longList",
  props: {
    msg: String,
  },
  data() {
    return {
      itemComponent: Item,
      items: [],
    };
  },
  mounted() {
    let step = 0
    console.log(1111, this.$refs.content)
    this.$refs.content.style.transform = `translate(0px, ${step} + px)`
    // setInterval(() => {
    //   step -= 8
    //   console.log(step)
      
    // }, 300)
    
// element.style {
//     transform: translate(0px, -10879.4px);
//     transition: all 0ms ease-in 0s;
// }
  },
  methods: {
    dataSource() {
      for (let i = 1; i <= 900000; i++) {
        this.items.push({
          id: i,
          name: i + "模拟字段",
        });
      }
    },
  },
  created() {
    this.dataSource();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  transition: all 1s ease-in 0s;
}
</style>
