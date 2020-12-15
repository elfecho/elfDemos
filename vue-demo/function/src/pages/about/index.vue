<template>
  <div>
    关于
    <About :username="username" :age="age" />
    <button @click="readDetail">查看详情</button>
    <router-link to="/">回到首页</router-link>
  </div>
</template>

<script>
import About from '@/components/about/About'
export default {
  data() {
    return {
      username: 'elfecho',
      age: 20
    }
  },
  components: {
    About
  },
  methods: {
    readDetail() {
      this.$router.replace({path:'/about/detail'})
    }
  },
}
</script>

<style scoped lang ="scss">

</style>
