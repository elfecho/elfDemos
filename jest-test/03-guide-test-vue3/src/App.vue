<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <Greetting></Greetting> -->
  <Foo />
  </div>
</template>

<script>
// import Greetting from "./components/Greetting.vue";
import Foo from './components/Foo.vue'

export default {
  name: "App",
  components: {
    Foo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
