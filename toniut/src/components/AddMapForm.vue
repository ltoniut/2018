<template>
  <v-container fluid>
    <v-form @submit="submitForm()">
      <v-card class="ma-2 pa-2">
        <v-layout row>
          <v-flex xs8>
            <v-text-field label="Nombre" type="text" name="nombre" id="nombre" v-model.trim="name"/>
          </v-flex>
          <v-flex xs4>
            <v-btn @click="randomizeName()">Generar automáticamente</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-btn @click="getManyNames()">Nombres de ejemplo</v-btn>
            <v-chip
              v-for="name in this.exampleNames"
              :key="name"
              v-on:click="setName($event, name)"
              class="ma-2"
            >{{name}}</v-chip>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-textarea label="Descripción" v-model.number="description" />
        </v-layout>
        <v-layout row>
          <span class="display-2">Reinos:</span>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 v-for="realm in realms" :key="realm.id">
            <NewRealmForm v-bind:realm="realm"></NewRealmForm>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-btn @click="addRealm()">Agregar Reino</v-btn>
        </v-layout>
        <v-layout row>
          <span class="display-2">Variedades de mapas:</span>
        </v-layout>
        <v-layout row>
          <v-flex xs5 class="mr-2">
            <v-text-field label="Descripción" v-model.trim="varietyName"/>
          </v-flex>
          <v-flex xs5>
            <v-text-field label="Url" v-model.trim="varietyUrl"/>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-btn @click="addVariety()" class="submitButton">Agregar Variedad</v-btn>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 v-for="variety in this.varieties" :key="variety.id">
            <img :src="variety.url" :alt="variety.name" style="width:30%;">
            <label>{{variety.name}}</label>
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-spacer/>
          <v-btn @click="submitForm()" color="primary">Salvar Mapa</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import { Map, Realm } from "../objects.js";
import NewRealmForm from "./NewRealmForm.vue";
import RealmService from "../services/realmService";
import ShufflingService from "../services/shufflingService";
import router from "../router.js";
import axios from "axios";

export default {
  name: "AddMapForm",
  components: {
    NewRealmForm
  },
  data() {
    return {
      name: "",
      description: "",
      realms: [],
      varietyName: "",
      varietyUrl: "",
      varieties: [],
      exampleNames: [],
      realmId: 0,
      varietyId: 0
    };
  },
  methods: {
    addVariety() {
      this.varieties.push({
        id: ++this.varietyId,
        name: this.varietyName,
        url: this.varietyUrl
      });
    },
    addRealm() {
      this.realms.push(new Realm(++this.realmId, "", "", []));
    },
    getManyNames() {
      axios.get("https://api.myjson.com/bins/9sq6i").then(response => {
        this.exampleNames = ShufflingService.shuffle(response.data, 5);
      }).catch(function(error) {
        console.log(error);
        alert("Ha habido un error, verifica la conexión a internet");
      });
    },
    randomizeName() {
      axios.get("https://api.myjson.com/bins/9sq6i").then(response => {
        this.name = ShufflingService.shuffle(response.data, 1)[0];
      }).catch(function(error) {
        console.log(error);
        alert("Ha habido un error, verifica la conexión a internet");
      });
    },
    setName(event, name) {
      this.name = name;
    },
    submitForm() {
      if (
        this.name !== "" &&
        this.description !== "" &&
        this.varieties.length !== 0 &&
        this.realms.length !== 0
      ) {
        const map = new Map(
          0,
          this.name,
          this.description,
          this.varieties,
          this.realms
        );
        RealmService.create(map);
        router.push({ name: "home" });
      }
      else {
        alert("El mapa requerirá de un nombre, una descripción, por lo menos una variedad de imagen y por lo menos un reino");
      }
    }
  }
};
</script>