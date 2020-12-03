// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: (resolve) => require(['@/pages/about'], resolve)
    }
  ]
})