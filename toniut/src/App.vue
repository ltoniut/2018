<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import RealmService from "./services/realmService";

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
