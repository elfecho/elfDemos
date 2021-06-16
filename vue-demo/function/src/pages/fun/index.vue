<template>
  <div>
    测试工具方法 <br />
    <p>防抖测试</p>
    <button @click="handleClick">点击一下</button>
    <button @click="handleClick2">保留this {{ count }}</button>
  </div>
</template>

<script>
import { debounce, throttle } from "@/utils/common";
export default {
  name: 'fun',
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    handleClick: debounce(function() {
      console.log("hello");
    }, 5000),
    handleClick2: throttle(function() {
      this.count += 1;
    }, 1000),
  },
};
</script>

<style scoped lang="scss"></style>
