<template>
  <div>
    this is client home page
    <router-link tag="button" :to="{name: 'lodash'}">跳转到lodash</router-link>
    <!-- <router-link :to="{path: '/lodash'}"></router-link> -->
    <button @click="readDetail">查看详情</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    readDetail() {
      // 1. 不带参数
      // this.$router.push('/home')
      // this.$router.push({name:'home'})
      // this.$router.push({path:'/home'})
      // 2. query传参 
      // this.$router.push({name:'home',query: {id:'1'}})
      // this.$router.push({path:'/home',query: {id:'1'}})
      // // html 取参 $route.query.id
      // // script 取参 this.$route.query.id
      // 3. params传参
      // this.$router.push({name:'home',params: {id:'1'}}) // 只能用 name
        
      // // 路由配置 path: "/home/:id" 或者 path: "/home:id" ,
      // // 不配置path ,第一次可请求,刷新页面id会消失
      // // 配置path,刷新页面id会保留
      // // html 取参 $route.params.id
      // // script 取参 this.$route.params.id
      // 4. query和params区别
      // query类似 get, 跳转之后页面 url后面会拼接参数,类似?id=1, 非重要性的可以这样传, 密码之类还是用params刷新页面id还在
      // params类似 post, 跳转之后页面 url后面不会拼接参数 , 但是刷新页面id 会消失
      // this.$router.push({
      //   path: '/detail/5',
      //   query: {key:'1'}
      // })
      this.$router.push({
        name: 'detail',
        query: {key:'1'},
        params: {id: 2}
      })
    }
  },
}
</script>

<style scoped lang ="scss">

</style>
