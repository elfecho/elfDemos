<template>
  <div>
    <h2>自定义v-model</h2>
    <Vmodel v-model="text" />
    {{text}}
  </div>
</template>

<script>
import Vmodel from '@/components/vmodel'
export default {
  data() {
    return {
      text: ''
    }
  },
  components: {
    Vmodel
  }
}
</script>

<style scoped lang ="scss">

</style>
