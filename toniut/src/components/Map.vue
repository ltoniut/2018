<template>
  <div id="map">
    <img :src="this.image" :alt="this.current.name" style="width:100%;" />
    <div v-for="variant in this.variants" :key="variant.id">
      <v-btn @click="shiftMap(variant.id)" color="primary">{{ variant.name }}</v-btn>
    </div>
  </div>
</template>

<script>
import RealmService from "@/services/realmService";

export default {
  name: "Map",
  data() {
    return {
      variants: [],
      current: null,
      image: ""
    };
  },
  methods: {
    shiftMap(id) {
      this.current = this.variants.find(variant => variant.id === +id);
      this.image = this.current.url;
    }
  },
  created() {
    const mapId = this.$route.params.id;
    const map = RealmService.getOne(mapId);

    this.variants = map.imageVariants;
    this.current = this.variants[0];
    this.image = this.current.url;
  }
};
</script>