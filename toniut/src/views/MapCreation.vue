<template>
  <div class="formComponent" style="width: 80%;">
    <AddMapForm></AddMapForm>
  </div>
</template>
<script>
import AddMapForm from '../components/AddMapForm.vue';
import InfoBox from '../components/InfoBox.vue';
import mapData from "../assets/map-data.json";

export default {
  name: 'MapViewer',
  components: {
    AddMapForm
  },
  created() {
    
  }
}
</script>