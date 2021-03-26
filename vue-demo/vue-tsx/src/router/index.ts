import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true,
    },
    component: () => import('@/views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于',
      keepAlive: true,
    },
    component: () => import('../views/About'),
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
