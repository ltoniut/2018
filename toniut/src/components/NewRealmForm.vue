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
            <label for="description">Clima predominante: </label>
            <select v-model="climate">
                <option value="Plain">Planicies</option>
                <option value="Mountain">Montañas</option>
                <option value="Marsh">Pantanos</option>
                <option value="Hill">Colinas</option>
                <option value="Forest">Bosques</option>
                <option value="Desert">Desierto</option>
                <option value="Aquatic">Océano</option>
            </select>
        </div>
        <div class="form-group">
            <label for="newFauna">Fauna: </label><br>
            <input type="text" class="form-control" name="animalName" id="animalName" v-model.trim="animalName">
            <button @click="addFauna()" class="submitButton">Agregar fauna</button>
            <br>
            <tr v-for="animal in this.fauna" :key="animal.id">
                <label>{{animal.name}}</label><br>
            </tr>
            
            <button @click="recommendFauna()" class="submitButton">Recomendar</button>
            <br>
            <tr v-for="animal in this.recommendedFauna" :key="animal.name">
               <a class="link" v-on:click="addFauna($event, animal.name)">{{animal.name}}</a>
            </tr>
        </div>
        <label for="cityName">Nueva ciudad: </label>
        <input type="text" class="form-control" name="cityName" id="cityName" v-model.trim="cityName">
        <button @click="addCity()" class="submitButton">Agregar ciudad</button><br>
        <button @click="recommendCityNames()" class="submitButton">Recomendar nombres</button>

        <br>
        <tr v-for="city in this.cities" :key="city.id">
            <label>{{city.name}}</label><br>
        </tr>
        <hr>
    </section>
</template>

<script>
    //((Google Translate))
    import { Realm } from "../objects.js";
    import axios from 'axios';

    export default {
        name: "NewRealmForm",
        data() {
            return {
                name: "",
                description: "",
                climate: "",
                cities: [],
                cityId: 0,
                animalId: 0,
                cityName: "",
                animalName: "",
                dominantClimate: "",
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
            addCity() {
                this.cities.push({id: ++this.cityId, name: this.cityName});
            },
            addCity(event, name) {
                this.cities.push({id: ++this.cityId, name: name});
            },
            addFauna() {
                this.fauna.push({id: ++this.animalId, name: this.animalName});
            },
            addFauna(event, name) {
                this.fauna.push({id: ++this.animalId, name: name});
            }
            randomizeName() {
                const engName = axios.get('https://donjon.bin.sh/fantasy/random/rpc.cgi', { params: { type: 'Kingdom Name', n:"1" } })[0];
            },
            recommendCityNames() {
                this.recommendedCities = axios.get('https://donjon.bin.sh/fantasy/random/rpc.cgi', { params: { type: 'Common Town Name', n:"1" } });
            },
            recommendFauna() {
                const animalArray = [];
                let randomNmb = 0;

                for (let i = 0; i < 10; i++) {
                    randomNmb = Math.random() * (12) + 1;
                    animalArray.push(axios.get('https://donjon.bin.sh/pathfinder/encounter/rpc.cgi', { params: { level: randomNmb, climate:"Temperate", terrain: this.dominantClimate } })[0];)
                }
                
                this.recommendedFauna = animalArray;
            }
        }
    };
</script>