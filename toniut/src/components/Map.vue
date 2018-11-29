<template>
  <div id="map">
    <img :src="this.image" :alt="this.current.name" style="width:100%;" />
    <tr v-for="variant in this.variants" :key="variant.id">
      <button @click="shiftMap(variant.id)" class="button-primary">{{ variant.name }}</button>
    </tr>
  </div>
</template>

<script>
  import RealmService from "@/services/realmService";
  import router from '../router.js'

  export default {
      name: "Map",
      data() {
        return {
          variants: [],
          current: null,
          image: ""
        }
      },
      methods: {
        shiftMap(id) {
          console.log(typeof this.variants);

          this.current = this.variants.find(variant => variant.id === +id);
          this.image = this.current.url;
        }
      },
    created () {
      RealmService.getOne(this.$route.params.id)
        .then((map) => {
          this.variants = map.imageVariants;
          this.current = this.variants.find(variant => variant.default);
          this.image = this.current.url;
      })
    }
  };
</script>