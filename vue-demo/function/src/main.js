import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './utils/global.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

import VueVirtualScroller from "vue-virtual-scroller";

Vue.use(VueVirtualScroller);
Vue.use(ElementUI);

import VueI18n from 'vue-i18n'

import zh from '@/utils/langs/zh'

import en from '@/utils/langs/en'

Vue.use(VueI18n)

const i18n = new VueI18n({
  // 从本地存储中取，如果没有默认为中文，
  // 这样可以解决切换语言后，没记住选择的语言，刷新页面后还是默认的语言
  locale: localStorage.getItem('lang') || 'zh',
  messages: {
    'zh': zh, // 中文语言包
    'en': en // 英文语言包
  }
})

Vue.config.productionTip = false

const files = require.context('./assets', false, /\.png$/)
console.log('file', files.keys())
Vue.use(global)
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
