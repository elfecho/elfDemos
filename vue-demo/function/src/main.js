import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './utils/global.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

const files = require.context('./assets', false, /\.png$/)
console.log('file', files.keys())
Vue.use(global)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
