<template>
  <div>
    关于
    <About :username="username" :age="age" />
    <button @click="readDetail">查看详情</button>
    <div v-my-click="{color: 'red'}">我是自定义指令</div>
    <img v-imgUrl="url" class="img" alt="">
    <router-link to="/">回到首页</router-link>
  </div>
</template>

<script>
import About from '@/components/about/About'
export default {
  name: 'About',
  data() {
    return {
      username: 'elfecho',
      age: 20,
      url: 'http://img.kuke.com/images/audio/label/max/c3fd5252ec094671a3c4db08dbaa23897271651694462154401.jpg'
    }
  },
  components: {
    About
  },
  // bind()：当指令绑定在 HTML 元素上时触发
  // inserted()：当指令绑定的元素插入到父节点中的时候触发
  // update()：当指令绑定的元素状态/样式、内容(这里指元素绑定的 vue 数据) 发生改变时触发
  // componentUpdated()：当 update() 执行完毕之后触发
  // unbind()：当指令绑定的元素从 dom 中删除时触发
  directives: {
    myClick: {
      bind(el, binding, vnode) {
        console.log('bind', el, binding, vnode)
        el.style.color = binding.value.color
      },
      inserted(el) {
        console.log('bind', el)
        
      }
    },
    imgUrl: {
      bind(el, binding) {
        el.style.backgroundColor = '#333' //设置背景颜色
        var img = new Image()
        img.src = binding.value // binding.value 指令后的参数
        img.onload = function () {
            el.style.backgroundColor = ''
            el.src = binding.value
        }
      },
    }
  },
  methods: {
    readDetail() {
      this.$router.replace({path:'/about/detail'})
    }
  },
}
</script>

<style scoped>
  .img {
    width: 100px;
    height: 100px;
  }
</style>
