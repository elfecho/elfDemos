<template>
  <div>
    <div class="list">
      <router-link
        :class="['item', selectPath === item.url ? 'select' : '']"
        v-for="(item, index) of list"
        :key="index"
        tag="div"
        :to="item.url"
      >
        {{ item.label }}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectPath: "/",
      list: [
        {
          label: "首页",
          url: "/",
        },
        {
          label: "关于",
          url: "/about",
        },
        {
          label: "tree",
          url: "/trees",
        },
        {
          label: "fun",
          url: "/fun",
        },
        {
          label: "img转base64",
          url: "/imgBase",
        },
        {
          label: "marquee",
          url: "/marquee",
        },
        {
          label: "language",
          url: "/languagePage",
        },
        {
          label: "echarts",
          url: "/echarts",
        },
      ],
    };
  },
  mounted() {
    // console.log(this.$route);
  },
  watch: {
    $route: {
      handler(newRoute) {
        this.selectPath = newRoute.path;
      },
      immediate: true,
      deep: true
    }
    
    
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.list .item {
  padding: 0 20px;
  line-height: 40px;
  background: #d5d5d5;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;
}
.list .item.select {
  background: chocolate;
  color: #fff;
}
</style>
