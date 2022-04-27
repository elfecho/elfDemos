<template>
  <div class="home">
    <h2>Three.js 练习</h2>
    <ul>
      <li v-for="(item, index) in tabList" :key="index" @click="navUrl(item)">
        <p class="tit">{{ item.url }}</p>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tabList: [
        {
          url: "demo01",
          name: "创建一个正方体",
        },
        {
          url: "demo02",
          name: "添加坐标轴、光源和阴影效果",
        },
        {
          url: "demo03",
          name: "添加动效、简化试验、自适应场景",
        },
        {
          url: "demo04",
          name: "场景的基本方法和属性",
        },
        {
          url: "demo05",
          name: "几何体和网络",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    navUrl(item) {
      this.$router.push(`/example/${item.url}`);
    },
  },
};
</script>

<style lang="scss">
h2 {
  padding: 30px;
  text-align: center;
  color: #fff;
}
ul {
  list-style: none;
  li {
    background: #101010;
    padding: 20px;
    cursor: pointer;
    &:nth-child(odd) {
      background: #080808;
    }
    p {
      color: #fff;
      &.tit {
        font-weight: 700;
      }
    }
  }
}
</style>
