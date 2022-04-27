<template>
  <div id="app">
    <div class="back" v-if="isBack" @click="handleBack">
      <p>&lt;</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBack: false,
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        this.isBack = to.path.indexOf("/example") > -1;
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background: #080808;
}
.back {
  position: fixed;
  top: 0;
  left: 0;

  width: 50px;
  height: 50px;
  p {
    font-size: 30px;
    color: #fff;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
