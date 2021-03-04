<template>
  <Baz ref="baz" class="baz" />
</template>

<script>
import Baz from './Baz.vue'
import { ref, onMounted } from 'vue'
export default {
  components: {
    Baz
  },
  setup() {
    const baz = ref(null)
    
    onMounted(() => {
      console.log(baz)
    })
    return {
      baz
    }
  }
}
</script>

<style scoped lang ="scss">

</style>
