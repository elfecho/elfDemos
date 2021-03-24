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
        ref="listItem"
        class="item bar baz"
      ></list-item>
    </ul>
    <button @click="getItem">获取Item</button>
    <bar />
  </div>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue'
  import ListItem from '@/components/ListItem.vue'  
  import Bar from './Bar.vue'
  import { reactive, ref, watchEffect } from 'vue'

  const inputValue = ref('')
  const list = reactive(['hello'])
  const listItem = ref(null)
  let a = ref(1)
  
  // 之前会把 setup 返回的对象挂载到 组件的实例上
  // 而现在是给关闭了
  const getItem = () => {
    console.log(listItem.value.getName(), listItem.value.count)
  }
  const handleClick = (item) => {
    list.push(String(item))
    inputValue.value = ''
  }
  const deletes = (index) => {
    console.log(index)
    list.splice(index, 1)
  }

  const shopTimer = setInterval(() => {
    a.value++
  }, 2000)

  watchEffect(() => {
    console.log('list', list)
  })

  // 验证顶层await
  // function getTime () {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(1)
  //     }, 0)
  //   })
  // }
  // 调用时出现bug
  // const time = await getTime()
  // console.log(time)

  

</script>

<style scoped lang="scss">
  .container {
    padding: 20px;
  }

</style>
