<template>
<div>
  <div style="display:flex; max-height:100vh;">
    <div class="mapComponent" style="width: 80%;">
      <Map></Map>
    </div>
    <div id="info" style="width:20%; overflow:auto;">
      <InfoBox></InfoBox>
    </div>
  </div><br>
  <button @click="backHome()" color="accent" class="button-primary">Regresar a selección</button>
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
  methods: {
    backHome() {
      router.push({ name: "home" });
    }
  },
  created() {
    if (!this.$store.getters.token) {
      router.push({ name: 'login' });
    }
  }
}
</script>