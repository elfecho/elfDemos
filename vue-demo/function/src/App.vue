<template>
  <div id="app">
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import Tab from "./components/Tab.vue";
// import Time from './components/Time'
export default {
  name: "App",
  data() {
    return {
      aliveList: ['fun']
    }
  },
  components: {
    // HelloWorld,
    Tab,
  },
};
</script>

<style></style>
