<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <p>{{ name }} : {{ computedNameRef }}</p>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
  },

  mounted() {
    console.log('==========>', this.name)
  },
  setup(props, { slots }) {
    console.log(props, slots)
    let state = reactive({
      name: 'tom',
    })
    let nameRef = ref('tom')

    setInterval(() => {
      nameRef.value += '1'
    }, 5000)

    const computedNameRef = computed(() => {
      return nameRef.value + '2'
    })

    watchEffect(() => {
      console.log(nameRef.value)
    })

    watchEffect(() => {
      console.log(nameRef.value)
    })
    return {
      name: nameRef,
      computedNameRef,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
