import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Vuetify from 'vuetify';

import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    'primary': colors.shades.black,
    'secondary': "#d3d3d3",
    'accent': "#0000ff",
    'error': colors.red.accent3
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
