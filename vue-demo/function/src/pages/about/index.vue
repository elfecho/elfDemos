<template>
  <div>
    关于
    <About :username="username" :age="age" />
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
  }
}
</script>

<style scoped lang ="scss">

</style>
