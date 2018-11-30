import axios from 'axios';
import uniqueId from 'lodash/uniqueId'

export default {
    maps: [],
    getAll() {
      if (this.maps.length === 0){
        axios.get('https://api.myjson.com/bins/zy32i').then(response => {
          this.maps = response.data.creations;
        }).catch(function(error) {
        console.log(error);
        alert("Ha habido un error, verifica la conexión a internet");
      });
      }
      return this.maps;
    },
    create(map) {
      const newMap = {
        ...map,
        id: uniqueId()
      }
      this.maps = [...this.maps, newMap]
      return this.maps
    },
    getOne(id) {
      const test = this.maps.find(map => map.id === id);
      return test;
    }
  }
  