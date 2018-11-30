<template>
  <div id="map">
    <img :src="this.image" :alt="this.current.name" style="width:100%;" />
    <div v-for="variant in this.variants" :key="variant.id">
      <button @click="shiftMap(variant.id)" class="button-primary">{{ variant.name }}</button>
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