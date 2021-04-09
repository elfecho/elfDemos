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
      // component: (resolve) => require(['@/pages/about'], resolve)
      component: () => import('./../pages/about')
    },
    {
      path: '/about/detail',
      name: 'AboutDetail',
      component: () => import('./../pages/about/detail')
    },
    {
      path: '/vmodel',
      name: 'Vmodel',
      component: () => import('./../pages/vmodel')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('./../pages/tree/tree')
    },
    {
      path: '/trees',
      name: 'trees',
      component: () => import('./../pages/tree/trees')
    },
    {
      path: '/fun',
      name: 'fun',
      component: () => import('./../pages/fun')
    },
  ]
})