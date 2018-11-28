<template>
  <v-app dark>
    <div id="app">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
    import store from './store/store'
    import Vue from 'vue';
    import Vuetify from 'vuetify';
    import colors from 'vuetify/es5/util/colors';
    import RealmService from "./services/realmService";

    Vue.use(Vuetify, {
      options: {
        customProperties: true
      },
      theme: {
        primary: colors.black,
        secondary: colors.grey.darken1,
        accent: colors.brown,
        error: colors.red.accent3
      }});

    export default {
      name: 'app',
      data() {
        return {
        }
      },
      components: {
      },
      created () {
        RealmService.populate();
      }
    };
</script>

<style scoped>
  .button {
    color: var(--v-primary-base);
    background-color: var(--v-accent);
  }
</style>
