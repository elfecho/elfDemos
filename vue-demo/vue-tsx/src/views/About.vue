<template>
  <div class="nav">
    <router-link to="/"> Home</router-link>
    <router-link to="/about">About </router-link>
  </div>
  <div>about</div>
  <HelloWorld msg="abc" />
</template>

<script lang="ts" setup>
import HelloWorld from 'components/HelloWorld.vue'
</script>

<style lang="scss">
.nav {
  margin-bottom: 50px;
  a {
    margin-right: 20px;
  }
}
</style>
