import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0,
  list: [
    'hello',
    'world',
    'liujunhao'
  ]
}

const getters = {
  getterCount(state) {
    return state.count
  },
  filterList(state) {
    return state.list.filter(item => item.length > 5)
  }
}

const mutations = {
  mutationsAddCount(state, n = 0) {
    return (state.count += n)
  },
  mutationsReduceCount(state, n = 0) {
    return (state.count -= n)
  }
}

const actions = {
  actionsAddCount({commit}, params) {
    setTimeout(() => {
      commit('mutationsAddCount', params)
    }, 100)
  },
  actionsReduceCount({commit}, params) {
    setTimeout(() => {
      commit('mutationsReduceCount', params)
    }, 100)
  }
}

// const stateList = {
//   state: {
//     count: 0,
//     list: [
//       'hello',
//       'world',
//       'liujunhao'
//     ]
//   },
//   getters: {
//     getterCount(state) {
//       return state.count
//     },
//     filterList(state) {
//       return state.list.filter(item => item.length > 5)
//     }
//   },
//   mutations: {
//     mutationsAddCount(state, n = 0) {
//       return (state.count += n)
//     },
//     mutationsReduceCount(state, n = 0) {
//       return (state.count -= n)
//     }
//   },
//   actions: {
//     actionsAddCount({commit}, params) {
//       setTimeout(() => {
//         commit('mutationsAddCount', params)
//       }, 100)
//     },
//     actionsReduceCount({commit}, params) {
//       setTimeout(() => {
//         commit('mutationsReduceCount', params)
//       }, 100)
//     }
//   }
// }

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})


