<template>
  <div>
    我是详情哦~~
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    // 获取路由参数
    console.log('query', this.$route.query)
    console.log('params', this.$route.params)
    this.$route.meta.title = '我是冬天的'
    console.log(this.$route.meta.title)
  },
}
</script>

<style scoped lang ="scss">

</style>
