<template>
  <div>
    <img alt="Vue logo" src="../assets/compass.png">
    <MapSelector></MapSelector>
  </div>
</template>

<script>
import MapSelector from "../components/MapSelector";
import router from '../router.js';

export default {
  name: 'MainScreen',
  components: {
    MapSelector
  },
  created() {
    if (!this.$store.getters.token) {
      router.push({ name: 'login' });
    }
  }
}
</script>