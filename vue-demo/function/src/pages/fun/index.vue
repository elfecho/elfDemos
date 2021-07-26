<template>
  <div>
    测试工具方法 <br />
    <p>防抖测试</p>
    <button @click="handleClick">点击一下</button>
    <button @click="handleClick2">保留this {{ count }}</button>
    <hr>
    测试vue数组能否改变
    <ul>
      <li v-for="item of list" :key="item.id">{{item.name}}</li>
    </ul>
    <button @click="addItem">添加一项</button>
    <button @click="setItem">设置数组的第二项的name值</button>
    <hr>
    测试新属性
    age: {{user.age}}
  </div>
</template>

<script>
import { debounce, throttle } from "@/utils/common";
export default {
  data() {
    return {
      count: 0,
      user: {},
      list: [
        {
          id: 0,
          name: 'javascript'
        },
        {
          id: 1,
          name: 'react'
        },
        {
          id: 2,
          name: 'vue'
        }
      ]
    };
  },
  mounted() {
    // this.user.name = 'elfecho'
    this.$set(this.user, 'age', 'elfecho')
  },
  methods: {
    handleClick: debounce(function() {
      console.log("hello");
    }, 5000),
    handleClick2: throttle(function() {
      this.count += 1;
    }, 1000),
    addItem() {
      const endId = this.list[this.list.length - 1].id
      this.list.push({
        id: endId + 1,
        name: 'es6'
      })
    },
    setItem() {
      this.list[1].name = 'vuex'
    }
  },
};
</script>

<style scoped lang="scss"></style>
