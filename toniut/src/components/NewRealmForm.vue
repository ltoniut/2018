<template>
    <section id="form-realm">
        <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" v-model.trim="name">
            <button @click="randomizeName()">Generar automáticamente</button>
        </div>
        <div class="form-group">
            <label for="description">Descripcion</label>
            <textarea class="form-control" name="description" id="description" placeholder="Descripcion" v-model.trim="description"></textarea>
        </div>
        <div class="form-group">
            <label for="description">Terreno predominante: </label>
            <select v-model="terrain">
                <option v-for="terrain in terrainOptions" v-bind:value="terrain.english" :key="terrain">
                  {{ terrain.spanish }}
                </option>
            </select>
        </div>
        <div class="form-group">
            <label for="newFauna">Fauna: </label><br>
            <input type="text" class="form-control" name="animalName" id="animalName" v-model.trim="animalName">
            <button @click="addInputFauna()" class="submitButton">Agregar fauna</button>
            <br>
            <tr v-for="animal in this.fauna" :key="animal">
                <label>{{animal}}</label><button @click="removeFauna(animal)">X</button><br>
            </tr>
            <button @click="recommendFauna()" class="submitButton">Recomendar Fauna Local</button>
            <br>
            <tr v-for="animal in this.recommendedFauna" :key="animal">
               <a class="link" v-on:click="addFauna($event, animal)">{{animal}}</a>
            </tr>
        </div>
        <label for="cityName">Nueva ciudad: </label>
        <input type="text" class="form-control" name="cityName" id="cityName" v-model.trim="cityName">
        <button @click="addInputCity()" class="submitButton">Agregar ciudad</button><br>
        <tr v-for="city in this.cities" :key="city">
            <label>{{ city }} </label><button @click="removeCity(city)">X</button><br>
        </tr>
        <button @click="recommendCityNames()" class="submitButton">Recomendar nombres</button>
            <br>
            <tr v-for="city in this.recommendedCities" :key="city">
               <a class="link" v-on:click="addCity($event, city)">{{city}}</a>
            </tr>
        <label for="leader">Lider:</label><br>
        <label for="leaderName">Nombre: </label><input type="text" class="form-control" name="leaderName" id="leaderName" placeholder="Nombre" v-model.trim="leaderName"><br>
        <label for="leaderUrl">Imagen: </label><input type="text" class="form-control" name="leaderUrl" id="leaderUrl" placeholder="Url de imagen" v-model.trim="leaderUrl"><br>
        <hr>
        <button @click="recommendLeader()" class="submitButton">Recomendar Lider de acuerdo al Terreno</button>
    </section>
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
      }aa
    },
    randomizeName() {
      axios.get("https://api.myjson.com/bins/i6xt6").then(response => {
        this.name = ShufflingService.shuffle(response.data, 1)[0];
      });
    },
    recommendCityNames() {
      axios.get("https://api.myjson.com/bins/up1ii").then(response => {
        this.recommendedCities = ShufflingService.shuffle(response.data, 5);
      });
    },
    recommendFauna() {
      axios.get("http://api.myjson.com/bins/11wdxm").then(response => {
        this.recommendedFauna = ShufflingService.shuffleByTerrain(response.data, 5, this.terrain);
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
        const leader = ShufflingService.shuffleByTerrain(response.data, 1, this.terrain)[0];
        this.leaderName = leader.name;
        this.leaderUrl = leader.imgUrl;
      })
    }
  },
  created() {
    axios.get("http://api.myjson.com/bins/b6o0q").then(response => {
        this.terrainOptions = response.data;
      });
  },
};
</script>