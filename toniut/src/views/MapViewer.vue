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
    <v-btn @click="backHome()" color="accent">Regresar a selección</v-btn>
  </div>
</template>

<script>
import Map from '../components/Map.vue';
import InfoBox from '../components/InfoBox.vue';

export default {
  name: 'MapViewer',
  components: {
    Map,
    InfoBox
  },
  methods: {
    backHome() {
      this.$router.push({ name: "home" });
    }
  },
  created() {
    if (!this.$store.getters.token) {
      this.$router.push({ name: 'login' });
    }
  }
}
</script>