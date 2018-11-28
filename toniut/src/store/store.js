import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      logged: false,
      user: ""
    },
    mutations: {
      change(state, user) {
        state.user = user
      },
      login(state) {
          state.logged = true
      }
    },
    getters: {
        logged: state => state.logged,
        user: state => state.user
    }
  })