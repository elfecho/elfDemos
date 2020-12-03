<template>
  <div>
    首页~~~~~
    <div>
      <h2>这里是list内容</h2>
      <h2>{{count}}</h2>
      <div>
        <button @click="handleAddClick(10)">增加</button>
        <button @click="handleReduceClick(10)">减少</button>
      </div>
      <div>
        
        <h2>{{list}}</h2>
        <h3>大于6个字符的：{{maxlist}}</h3>
        <button>获取大于6个字符的</button>
      </div>
    </div>

    <router-link to="/about">about</router-link>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  created() {
    console.log(mapState)
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
      list: 'list'
    }),
    ...mapGetters({
      maxlist: 'filterList'
    })
  },
  methods: {
    ...mapActions({
      handleAddClick: 'actionsAddCount',
      handleReduceClick: 'actionsReduceCount'
    })
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

<style scoped lang ="scss">

</style>
