<template>
<div>
  <div style="width: 80%;">
    <AddMapForm></AddMapForm>
  </div><br>
  <button @click="backHome()" color="secondary" class="button-primary">Regresar a selección</button>
</div>
</template>
<script>
import AddMapForm from '../components/AddMapForm.vue';
import router from '../router.js';

export default {
  name: 'MapViewer',
  components: {
    AddMapForm
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