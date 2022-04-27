import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]
// 批量引入路由
importPages(require.context('@/views', true, /\.vue$/, 'lazy'))
function importPages(r) {
  r.keys().forEach(key => {
    routes.push({ path: (key.split('.'))[1], component: () => r(key) })
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
