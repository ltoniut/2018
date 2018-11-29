<template>
  <div class="formComponent" style="width: 80%;">
    <AddMapForm></AddMapForm>
  </div>
</template>
<script>
import AddMapForm from '../components/AddMapForm.vue';
import InfoBox from '../components/InfoBox.vue';
import router from '../router.js';

export default {
  name: 'MapViewer',
  components: {
    AddMapForm
  },
  created() {
      if (!this.$store.getters.logged) {
            router.push({name: 'login'});
      }
  }
}
</script>