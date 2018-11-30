<template>
  <v-card>
    <v-select v-model="selectedMap" :items="maps" label="Elegir mapa" item-text="name" item-value="id" @change="chooseMap()" />
    <v-btn id="new-map" v-on:click="createNew()">Nuevo Mapa</v-btn>
  </v-card>
</template>


<script>
//https://fakejson.com/documentation
import RealmService from "@/services/realmService";

export default {
  name: "MapSelector",
  data() {
    return {
      maps: [],
      selectedMap: null
    };
  },
  methods: {
    chooseMap() {
      if (this.selectedMap !== null) {
        this.$router.push({ name: "map", params: { id: this.selectedMap } });
      }
    },
    createNew() {
      this.$router.push({ name: "creation" });
    }
  },
  created() {
      this.maps = RealmService.getAll();
  }
};
</script>
