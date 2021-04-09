<template>
  <div id="app">
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from "./components/Tab.vue";
// import Time from './components/Time'
export default {
  name: "App",
  components: {
    // HelloWorld,
    Tab,
  },
};
</script>

<style></style>
