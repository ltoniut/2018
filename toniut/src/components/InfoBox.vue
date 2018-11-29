<template>
    
<div id="info" class="infobox" @keyup.enter="submitForm()">
    <div class="title">
        {{ name }}
    </div>
    <div class="description">
        {{ description }}
    </div>
    <div class="options">
        <tr v-for="(region, key) in this.regions ":key="key">
            <a class="link" v-on:click="goToRegion($event, region.id)">{{ region.name }}</a>
        </tr>
    </div>
</div>
</template>

<style>
    .infobox {
        background-color: yellow;
        height: 100%;
    }
</style>
<script>
    import RealmService from '../services/realmService';
    import router from '../router.js';

    export default {
        name: "Map",
        data() {
        return {
            realmId: 0,
            name: "",
            description: "",
            regions: []
        }
        },
        methods: {
            goToRegion(event, rId) {
                console.log(rId);
                router.push({ name: 'mapReg', params: { id: this.realmId, regId: rId }});
            }
        },
        created() {
            const mapId = this.$route.params.id;
            const regionId = this.$route.params.regId;

            if (!regionId) {
                RealmService.getOne(mapId)
                    .then((map) => {
                    this.id = map.id
                    this.name = map.name
                    this.description = map.description
                    this.regions = map.realms
                });
            }

            else {
                RealmService.getOne(mapId)
                    .then((map) => {
                        const realm = map.realms.find(function(realm) { return realm.id == regionId; });
                        this.id = map.id
                        this.name = realm.name
                        this.description = realm.description
                });
            }
        }
    };
</script>