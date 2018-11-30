<template>
  <v-form>
    <v-container>
      <v-card raised class="ma-2 pa-2">
        <v-card class="ma-1 pa-2">
          <v-layout row>
            <span class="display-1">Reino</span>
          </v-layout>
          <v-layout row>
            <v-text-field label="Nombre" v-model.trim="name"/>
            <v-btn @click="randomizeName()">Generar automáticamente</v-btn>
          </v-layout>
          <v-layout row>
            <v-textarea label="Descripción" v-model.trim="description"/>
          </v-layout>
          <v-layout row>
            <v-select
              label="Terreno predominante"
              :items="terrainOptions"
              item-value="english"
              item-text="spanish"
              v-model="terrain"
            />
          </v-layout>
        </v-card>
        <v-card class="ma-1 pa-2">
          <v-layout row>
            <span class="display-1">Fauna</span>
          </v-layout>
          <v-layout row>
            <v-text-field label="Fauna" v-model.trim="animalName"/>
            <v-btn @click="addInputFauna()">Agregar fauna</v-btn>
          </v-layout>
          <v-layout row>
            <tr v-for="animal in this.fauna" :key="animal">
              <v-chip close @input="removeFauna(animal)">{{animal}}</v-chip>
            </tr>
          </v-layout>
          <v-layout row>
            <v-btn :disabled="terrain == ''" @click="recommendFauna()" class="submitButton">Recomendar Fauna Local</v-btn>
            <v-chip
              v-for="(animal, index) in this.recommendedFauna"
              :key="index"
              v-on:click="addFauna($event, animal)"
            >{{animal}}</v-chip>
          </v-layout>
        </v-card>
        <v-card class="ma-1 pa-2">
          <v-layout row>
            <span class="display-1">Ciudades</span>
          </v-layout>
          <v-layout row>
            <v-text-field label="Nueva ciudad" v-model.trim="cityName"/>
            <v-btn @click="addInputCity()" class="submitButton">Agregar ciudad</v-btn>
          </v-layout>
          <v-layout row>
            <tr v-for="city in this.cities" :key="city">
              <v-chip close @input="removeCity(city)">{{city.name}}</v-chip>
            </tr>
          </v-layout>
          <v-layout row>
            <v-btn @click="recommendCityNames()" class="submitButton">Recomendar nombres</v-btn>
            <v-chip
              v-for="city in this.recommendedCities"
              :key="city"
              v-on:click="addCity($event, city)"
            >{{city}}</v-chip>
          </v-layout>
        </v-card>
        <v-card class="ma-1 pa-2">
          <v-layout row>
            <span class="display-1">Lider</span>
          </v-layout>
          <v-layout row>
            <v-text-field label="Nombre" v-model.trim="leaderName"/>
          </v-layout>
          <v-layout row>
            <v-text-field label="Url de imagen" v-model.trim="leaderUrl"/>
          </v-layout>
          <v-layout row>
            <v-btn
              :disabled="terrain == ''"
              @click="recommendLeader()"
              class="submitButton"
            >Recomendar Lider de acuerdo al Terreno</v-btn>
          </v-layout>
          <v-btn @click="confirm()" class="submitButton">Confirmar</v-btn>
        </v-card>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import ShufflingService from "@/services/shufflingService";

export default {
  name: "NewRealmForm",
  data() {
    return {
      name: "",
      description: "",
      terrain: "",
      cities: [],
      cityId: 0,
      animalId: 0,
      cityName: "",
      animalName: "",
      terrainOptions: [],
      leaderName: "",
      leaderUrl: "",
      fauna: [],
      recommendedFauna: [],
      recommendedCities: []
    };
  },
  props: {
    realm: {
      type: Object
    }
  },
  methods: {
    addInputCity() {
      if (!this.cities.includes(this.cityName)) {
        this.cities.push({ name: this.cityName });
      }
    },
    addCity(event, name) {
      if (!this.cities.includes(name)) {
        this.cities.push({ name: name });
      }
    },
    addInputFauna() {
      if (!this.fauna.includes(this.animalName)) {
        this.fauna.push(this.animalName);
      }
    },
    addFauna(event, name) {
      if (!this.fauna.includes(name)) {
        this.fauna.push(name);
      }
    },
    randomizeName() {
      axios.get("https://api.myjson.com/bins/i6xt6").then(response => {
        this.name = ShufflingService.shuffle(response.data, 1)[0];
      });
    },
    recommendCityNames() {
      axios.get("https://api.myjson.com/bins/up1ii").then(response => {
        this.recommendedCities = ShufflingService.shuffle(response.data, 5);
      }).catch(function(error) {
        console.log(error);
        alert("Ha habido un error, verifica la conexión a internet");
      });
    },
    recommendFauna() {
      axios.get("http://api.myjson.com/bins/11wdxm").then(response => {
        this.recommendedFauna = ShufflingService.shuffleByTerrain(
          response.data,
          5,
          this.terrain
        ).catch(function(error) {
        console.log(error);
        alert("Ha habido un error, verifica la conexión a internet");
      });
      });
    },
    removeCity(name) {
      this.cities = this.cities.filter(c => c !== name);
    },
    removeFauna(name) {
      this.fauna = this.fauna.filter(a => a !== name);
    },
    recommendLeader() {
      axios.get("https://api.myjson.com/bins/occhm").then(response => {
        const leader = ShufflingService.shuffleByTerrain(
          response.data,
          1,
          this.terrain
        )[0];
        this.leaderName = leader.name;
        this.leaderUrl = leader.imgUrl;
      }).catch(function(error) {
        console.log(error);
        alert("Ha habido un error, verifica la conexión a internet");
      });
    },
    confirm() {
      const provisional = this.realm;
      if (this.name) {
        provisional.name = this.name;
        provisional.description = this.description;
        provisional.cities = this.cities;
        provisional.fauna = this.fauna;
        provisional.terrain = this.terrain;
        provisional.leader = { name: this.leaderName, imgUrl: this.leaderUrl };
      }
      else {
        alert("Un reino debería tener un nombre");
      }
    }
  },
  created() {
    axios.get("http://api.myjson.com/bins/b6o0q").then(response => {
      this.terrainOptions = response.data;
    }).catch(function(error) {
        console.log(error);
        alert("Ha habido un error, verifica la conexión a internet");
      });;
  }
};
</script>