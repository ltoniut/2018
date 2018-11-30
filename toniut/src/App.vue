<template>
  <v-app light>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
    import RealmService from "./services/realmService";

    export default {
      name: 'app',
      created () {
        // RealmService.populate()
      }
    };
</script>

<style>
  html { overflow-y: auto; }
</style>
