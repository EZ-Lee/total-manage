import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {}
}

export default new Vuex.Store({
  state,
  mutations: {
    saveUser (state, msg) {
      state.user = msg
    }
  }
})
