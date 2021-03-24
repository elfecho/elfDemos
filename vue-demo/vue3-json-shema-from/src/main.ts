import { createApp, defineComponent, h } from 'vue'
// import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
const logo = require('./assets/logo.png') // eslint-disable-line

// createElement
const App = defineComponent({
  render() {
    return h(
      'div',
      {
        id: 'app',
      },
      [
        h('img', {
          alt: 'Vue logo',
          src: logo,
        }),
        h(HelloWorld, {
          msg: '123',
          age: 12,
        }),
      ],
    )
  },
})

createApp(App).mount('#app')
