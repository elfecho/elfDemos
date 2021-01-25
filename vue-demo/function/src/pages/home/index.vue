<template>
  <div>
    首页~~~~~
    <!-- <router-link to="/about">about</router-link> -->
    <button @click="navAbout">跳转到about</button>
    <router-link to="/vmodel">自定义v-model</router-link>
    <router-link to="/tree">tree练习</router-link>
    <div>
      <div class="con">
        <h2>这里是根目录的store内容</h2>
        <h2>count: {{count}}</h2>
        <h2>List:::{{list}}</h2>
        <h2>getterCount: {{getterCount}}</h2>
        <h3>大于6个字符的：{{maxlist}}</h3>
        
      </div>
      
      <div class="con">
        <h2>这里是home目录的store内容</h2>
        <h2>count: {{homeCount}}</h2>
        <h2>getterCount: {{getterHomeCount}}</h2>
        <div>
          <button @click="handleAddClick(10)">增加</button>
          <button @click="handleReduceClick(10)">减少</button>
        </div>
        <h2>List: {{homeList}}</h2>
        
        <h3>大于6个字符的：{{HomeMaxlist}}</h3>
        <button @click="mutationsAddList">mutationsAddList</button>
        
      </div>
    </div>

    
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  created() {
    console.log(mapState)
    console.log(this.$store.getters.filterList)
  },
  
  computed: {
    // count(){
    //   return this.$store.getters.getterCount
    // },
    // list() {
    //   return this.$store.getters.filterList
    // },
    ...mapState({
      count: 'count',
      list: 'list',
      homeCount: state => state.home.count,
      homeList: state => state.home.list
    }),
    ...mapGetters({
      maxlist: 'filterList',
      getterCount: 'getterCount',
      
      HomeMaxlist: 'home/filterList',
      getterHomeCount: 'home/getterCount'
    })
  },
  methods: {
    ...mapActions({
      handleAddClick: 'actionsAddCount',
      handleReduceClick: 'actionsReduceCount'
    }),
    ...mapMutations([
      'addList'
    ]),
    mutationsAddList() {
      this.addList('588546')
    },
    navAbout() {
      console.log('跳转路由')
      this.$router.push({path:'/about'})
    }
    // handleAddClick(n) {
    //   this.$store.dispatch('actionsAddCount', n)
    // },
    // handleReduceClick(n) {
    //   this.$store.dispatch('actionsReduceCount', n)
    // }
    // handleAddClick(n) {
    //   this.$store.commit('mutationsAddCount', n)
    // },
    // handleReduceClick(n) {
    //   this.$store.commit('mutationsReduceCount', n)
    // }
  },
}
</script>

<style scoped>
.con {
  border: 1px solid #333;
  padding: 20px;
  margin-bottom: 10px;
}
</style>
