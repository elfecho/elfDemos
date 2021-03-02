<template>
  <div class="navbar">
    <div 
      v-for="item in list" 
      :key="item.name"
      class="navbar__item"
    >
      <router-link :to="item.to" class="title">
        {{item.title}}
      </router-link>
    </div>
  </div>
  
</template>

<script setup>
  import { reactive } from 'vue'
  import { useRoute } from 'vue-router'

  const list = reactive([{
    to: { name: 'Home' },
    title: '首页'
  }, {
    to: { name: 'About' },
    title: '关于'
  }])

</script>

<style lang="scss">
.navbar {
  display: flex;
  height: 50px;
  flex-flow: row nowrap;
  &__item {
    width: 90px;
    background: #f0f0f0;
    .title {
      display: block;
      color: #333;
      text-decoration: none;
      text-align: center;
      line-height: 50px;
    }
    .router-link-active {
      color: red;
    }
  }
}

</style>