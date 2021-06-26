import { createStore } from 'vuex'

export default createStore({
  state: {
    pageChange: 0
  },
  mutations: {
    setPageChange (state, payload) {
      state.pageChange += payload
    }
  },
  actions: {
    setPageChangeHandler ({ commit }, payload) {
      commit('setPageChange', payload)
    }
  },
  modules: {}
})
