<template>
  <NavBar></NavBar>
  <div class="container">
    <input type="text" v-model="inputValue">
    <button @click="() => handleClick(inputValue)">提交</button>
    <list-item></list-item>
  </div>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue'
  import ListItem from '@/components/ListItem.vue'
  import { ref } from 'vue'
  

  const inputValue = ref('')
  const handleClick = (item) => {
    console.log(item)
  }

</script>

<style scoped lang="scss">
  .container {
    padding: 20px;
  }

</style>
