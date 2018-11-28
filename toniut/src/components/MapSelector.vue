<template>
    <div class="">
        <select v-model="selectedMap" @change="chooseMap()">
            <option v-for="map in maps" v-bind:value="map.id" v-bind:key="map.id" @>
                {{ map.name }}
            </option>
        </select> <br>
        <button id="new-map" v-on:click="createNew()">Nuevo Mapa</button>
    </div>
</template>


<script>
    //https://fakejson.com/documentation
    import RealmService from "@/services/realmService";
    import router from '../router.js';

    export default {
        name: "MapSelector",
        data() {
        return {
            maps: [],
            selectedMap: null
        }
        },
        methods: {
            chooseMap() {
                if (this.selectedMap !== null) {
                    router.push({ name: 'map', params: { id: this.selectedMap }});
                }
            },
            createNew() {
                router.push({name: 'creation'})
            }
        },
        created() {
            RealmService.getAll()
            .then((maps) => {
                this.maps = maps
            })
        }
    };
</script>
