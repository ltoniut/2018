<template>
  <div id="info" class="infobox" @keyup.enter="submitForm()">
    <div class="title">
      {{ name }}
    </div>
    <div class="description">
      {{ description }}
    </div>
    <div class="regions">
      <tr v-for="(region, key) in this.regions" :key="key">
        <a class="link" v-on:click="goToRegion($event, region.id)">{{ region.name }}</a>
      </tr>
    </div>
    <div class="cities">
      <label>{{ citiesMessage }}</label><br>
      <tr v-for="(city, key) in this.cities" :key="key">
        <label>{{ city.name }}</label>
      </tr>
    </div>
    <div class="fauna">
      <tr v-for="(animal, key) in this.fauna" :key="key">
        <label>{{ animal }}</label>
      </tr>
    </div><br><br>
    <div class="leader">
      <label> {{ leader }} </label><br><br>
      <img :src="this.leaderImg" :alt="this.leader" style="width:80%;" />
    </div><br><br>
    <a class="link" v-on:click="recreate($event)">{{ returner }}</a>
  </div>
</template>

<style>
.infobox {
  background-color: yellow;
}
</style>
<script>
import RealmService from "../services/realmService";
import router from "../router.js";

export default {
  name: "Infobox",
  data() {
    return {
      id: 0,
      name: "",
      description: "",
      regions: [],
      cities: [],
      fauna: [],
      citiesMessage: "",
      leader: "",
      leaderImg: "",
      returner: ""
    };
  },
  methods: {
    goToRegion(event, rId) {
      const map = RealmService.getOne(this.id);
      const realm = map.realms.find(function(realm) {
        return realm.id == rId;
      });

      this.id = map.id;
      this.name = realm.name;
      this.citiesMessage = "Ciudades Principales:";
      this.description = realm.description;
      this.cities = realm.cities;
      this.regions = [];
      this.returner = "← Volver";

      if(realm.leader) {
        this.leader = "Liderado por " + realm.leader;
      }
    },
    recreate(event) {
      const map = RealmService.getOne(this.id);
      this.name = map.name;
      this.description = map.description;
      this.citiesMessage = "";
      this.cities = [];
      this.animals = [];
      this.regions = map.realms;
      this.leader = "";
      this.leaderImg = "";
      this.returner = "";
    }

  },
  created() {
    const mapId = this.$route.params.id;
    const map = RealmService.getOne(mapId);

    this.id = map.id;
    this.name = map.name;
    this.description = map.description;
    this.regions = map.realms;
  }
};
</script>