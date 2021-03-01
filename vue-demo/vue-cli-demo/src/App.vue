<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button @click="addListItem">提交</button>
  </div>
  <ul>
    <list-item v-for="(item, index) in list" :key="index" :msg="item"></list-item>
  </ul>
</template>

<script>
import ListItem from './components/ListItem.vue'
import { ref, reactive } from 'vue'
export default {
  name: 'App',
  components: {
    ListItem
  },
  setup() {
    const inputValue = ref('')
    let list = reactive([])
    const addListItem = () => {
      list.push(inputValue.value)
      inputValue.value = ''
    }
    return {
      list,
      inputValue,
      addListItem
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
