import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: ""
  },
  mutations: {
    change(state, user) {
      state.user = user;
    },
    login(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = null;
    }
  },
  getters: {
    token: state => state.token,
    user: state => state.user
  }
});