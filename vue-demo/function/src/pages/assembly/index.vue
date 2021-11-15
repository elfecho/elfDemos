<template>
  <div class="container">
    <my-input ref="elInput" clearable custom-type="d" @clear="handleClear">
      <template #prepend>
        <div>
          prepends
        </div>
      </template>
      <template #append>
        <div>
          appends
        </div>
      </template>
    </my-input>
  </div>
</template>

<script>
import MyInput from './components/my-input.vue'
export default {
  data() {
    return {
      value: 0,
      clearable: true
    }
  },
  components: {
    MyInput
  },
  methods: {
    handleClear() {
      console.log('clear')
    },
    focus() {
      this.$refs.elInput.focus()
    }
  
  },
}
</script>

<style scoped lang ="scss">
.container {
  width:100%;
}
</style>
