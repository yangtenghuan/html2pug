import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ''
  },
  mutations: {
    SET_USER (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    fetchUserInfo: ({ commit, state }, data) => {
      console.log(state)
      commit('SET_USER', {
        name: data
      })
    }
  }
})
