<template>
  <v-card>
    <v-layout row xs10>
      <AddMapForm></AddMapForm>
    </v-layout>
    <v-btn @click="backHome()" color="secondary">Regresar a selección</v-btn>
  </v-card>
</template>

<script>
import AddMapForm from '../components/AddMapForm.vue';

export default {
  name: 'MapViewer',
  components: {
    AddMapForm
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