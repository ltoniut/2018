<template>
<div>
  <div class="mapComponent" style="float:left; width: 80%;">
    <Map></Map>
  </div>
  <div id="info" style="width:20%; float:right;">
    <InfoBox></InfoBox>
  </div>
  </div>
</template>
<script>
import Map from '../components/Map.vue';
import InfoBox from '../components/InfoBox.vue';
import router from '../router.js';

export default {
  name: 'MapViewer',
  components: {
    Map,
    InfoBox
  },
  created() {
      if (!this.$store.getters.logged) {
            router.push({name: 'login'});
      }
  }
}
</script>