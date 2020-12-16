<template>
  <div id="app" v-wechat-title="$route.meta.title">
    This is client
    <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  name: "App"
};
</script>
 
<style scoped>
</style>