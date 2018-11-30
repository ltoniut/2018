<template>
  <div>
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
    if (!this.$store.getters.token) {
      this.$router.push({ name: 'login' });
    }
  }
}
</script>