<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/compass.png">
    <MapSelector></MapSelector>
  </div>
</template>

<script>
import MapSelector from "../components/MapSelector";

export default {
  name: 'MainScreen',
  components: {
    MapSelector
  },
  created() {
      if (!this.$store.getters.logged) {
            router.push({name: 'login'});
      }
  }
}
</script>