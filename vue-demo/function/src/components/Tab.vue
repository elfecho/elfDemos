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
      ],
    };
  },
  mounted() {
    console.log(this.$route);
  },
  watch: {
    $route(newRoute, oldRoute) {
      this.selectPath = newRoute.path;
      console.log(newRoute, oldRoute);
    },
  },
};
</script>

<style scoped>
.list {
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.list .item {
  padding: 0 20px;
  line-height: 40px;
  background: #d5d5d5;
  margin-right: 20px;
  cursor: pointer;
}
.list .item.select {
  background: chocolate;
  color: #fff;
}
</style>
