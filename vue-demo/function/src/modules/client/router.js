import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/home/home'),
    meta: {
      title:"这是动态title"
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('./pages/detail/detail'),
    meta: {
      title:"这是动态title",
      content: 'disable',
    }
  },
  {
    path: '/lodash',
    name: 'lodash',
    component: () => import('./pages/lodash/lodash'),
    meta: {
      title:"lodash Demo",
      content: 'disable',
    }
  }
]



export default new VueRouter({
  routes: routes
})