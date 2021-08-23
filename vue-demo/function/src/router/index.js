// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Tab from "@/components/Tab.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Tab,
      children: [
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
        {
          path: '/marquee',
          name: 'marquee',
          component: () => import('./../pages/marquee')
        },
      ]
    },
    
    {
      path: '/longList',
      name: 'longList',
      component: () => import('./../pages/longList')
    },
    {
      path: '/longListDemo',
      name: 'longListDemo',
      component: () => import('./../pages/longList/demo1.vue')
    },
    {
      path: '/longListDemo2',
      name: 'longListDemo2',
      component: () => import('./../pages/longList/demo2.vue')
    },
    {
      path: '/longListDemo3',
      name: 'longListDemo3',
      component: () => import('./../pages/longList/demo3.vue')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('./../pages/List/index.vue')
    },
  ]
})