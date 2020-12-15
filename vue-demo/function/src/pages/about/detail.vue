<template>
  <div>
    about 详情
    <button @click="readHistory">查看history栈</button>
    <button @click="onback">返回</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onback() {
      this.$router.back()
    },
    readHistory() {
      console.log(window.history)
    }
  },
}
</script>

<style scoped lang ="scss">

</style>
