<template>
    <section id="form-map"  @keyup.enter="submitForm()">
        <div class="form-group">
            <label for="nombre">Nombre: </label>
            <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" v-model.trim="name">
        </div><br>
        <div>
            <button @click="randomizeName()">Generar automáticamente</button>
        </div>
        <div>
            <button @click="getManyNames()">Nombres de ejemplo</button>
        </div>
        <div class="examples">
            <tr v-for="name in this.exampleNames" :key="name">
               <a class="link" v-on:click="setName($event, name)">{{name}}</a>
            </tr>
        </div>
        <br>
        <div class="form-group">
            <label for="description">Descripcion: </label>
            <textarea class="form-control" name="description" id="description" placeholder="Descripcion" v-model.number="description"></textarea>
        </div><br>
        <div class="form-group">
            <label for="realms">Reinos:</label><br><br>
            <tr v-for="realm in realms" :key="realm.id">
                <NewRealmForm :realm="realm"></NewRealmForm>
            </tr>
            <button @click="addRealm()" class="submitButton">Agregar Reino</button><br><br>
        </div>
        <div class="form-group">
            <label for="varieties">Variedades de mapas:</label><br><br>
            <label for="varietyDescription">Descripcion: </label>
            <input type="text" class="form-control" name="varietyName" id="varietyName" v-model.trim="varietyName">
            <label for="varietyDescription"> Url: </label>
            <input type="text" class="form-control" name="varietyUrl" id="varietyUrl" v-model.trim="varietyUrl">
            <button @click="addVariety()" class="submitButton">Agregar Variedad</button>
            <br>
            <tr v-for="variety in this.varieties" :key="variety.id">
                <img :src="variety.url" :alt="variety.name" style="width:30%;" />
                <label>{{variety.name}}</label>
            </tr>
        </div>
        
        <button @click="submitForm()" class="submitButton">Salvar Mapa</button>
    </section>
</template>

<script>
    import { Map, Realm } from "../objects.js";
    import NewRealmForm from "./NewRealmForm.vue";
    import RealmService from "../services/realmService";
    import ShufflingService from "../services/shufflingService";
    import router from '../router.js';
    import axios from 'axios';

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
            this.varieties.push({id: ++this.varietyId, name: this.varietyName, url: this.varietyUrl});
        },
        addRealm() {
            this.realms.push(new Realm(++this.realmId, "", "", []));
        },
        getManyNames() {
            axios.get('https://api.myjson.com/bins/9sq6i').then(response => {
                this.exampleNames = ShufflingService.shuffle(response.data, 5);
             });
        },
        randomizeName() {
            axios.get("https://api.myjson.com/bins/9sq6i").then(response => {
            this.name = ShufflingService.shuffle(response.data, 1)[0];
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
            RealmService.create(maps, map);
            router.push({name: 'home'});
        }
        }
    }
    };
</script>