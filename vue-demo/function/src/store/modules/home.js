const store = {
  state: {
    count: 0,
    list: [
      'hello',
      'world',
      'liujunhao'
    ]
  },
  getters: {
    'home/getterCount'(state) {
      return state.count
    },
    'home/filterList'(state) {
      console.log(state.list, state.count)
      return state.list.filter(item => item.length > 5)
    }
  },
  mutations: {
    mutationsAddCount(state, n = 0) {
      return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
      return (state.count -= n)
    },
    addList(state, params) {
      return state.list.push(params)
    }
  },
  actions: {
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
}

export default store