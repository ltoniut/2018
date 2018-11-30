import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import colors from 'vuetify/es5/util/colors';
import Vuetify from 'vuetify';

Vue.config.productionTip = false

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  theme: {
    'primary': colors.black,
    'secondary': "#d3d3d3",
    'accent': "#0000ff",
    'error': colors.red.accent3
  }});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
