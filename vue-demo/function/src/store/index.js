import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
Vue.use(Vuex)

const store = {
  modules: {
    home
  },
  state: {
    count: 100,
    list: []
  },
  getters: {
    getterCount(state) {
      return state.count
    },
    filterList(state) {
      console.log(state.list, state.count)
      return state.list.filter(item => item.length > 5)
    }
  }
}

export default new Vuex.Store(store)


