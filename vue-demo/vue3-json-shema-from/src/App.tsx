import { createApp, defineComponent, h, reactive, ref, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld'
const logo = require('./assets/logo.png') // eslint-disable-line

function renderHelloWorld(num: number) {
  return <HelloWorld age={num} />
}

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'Tom',
    })
    const numberRef = ref(1)

    // setInterval(() => {
    //   state.name += '1'
    //   numberRef.value += 1
    // }, 1000)

    watchEffect(() => {
      console.log(state.name)
    })

    return () => {
      const number = numberRef.value
      return (
        <div id="app">
          <img src={logo} alt="Vue logo" />
          <p>{state.name + number}</p>
          <input type="text" v-model={state.name} />
          {renderHelloWorld(12)}
        </div>
      )
    }

    // return () => {
    //   const number = numberRef.value
    //   return h(
    //     'div',
    //     {
    //       id: 'app',
    //     },
    //     [
    //       h('img', {
    //         alt: 'Vue logo',
    //         src: logo,
    //       }),
    //       h('p', state.name + number),
    //     ],
    //   )
    // }
  },
})