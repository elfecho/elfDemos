<template>
  <NavBar></NavBar>
  <div class="container">
    <input type="text" v-model="inputValue">
    <button @click="() => handleClick(inputValue)">提交</button>
    <ul>
      <list-item 
        v-for="(item, index) in list" 
        :key="index" 
        :item="item" 
        :index="index"
        @handleDelete="deletes"
      ></list-item>
    </ul>
    
  </div>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue'
  import ListItem from '@/components/ListItem.vue'  

  import { reactive, ref } from 'vue'
  

  const inputValue = ref('')
  const list = reactive(['hello'])
  const handleClick = (item) => {
    list.push(String(item))
    inputValue.value = ''
  }
  const deletes = (index) => {
    console.log(index)
    list.splice(index, 1)
  }
  

</script>

<style scoped lang="scss">
  .container {
    padding: 20px;
  }

</style>
