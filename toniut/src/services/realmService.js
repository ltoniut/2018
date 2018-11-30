import axios from 'axios';
import uniqueId from 'lodash/uniqueId'

export default {
    maps: [],
    getAll() {
      return axios.get('https://api.myjson.com/bins/zy32i').then(response => {
        this.maps = response.data.creations;
        return this.maps;
      });
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
      return this.maps.find(map => map.id === +id);
    }
  }
  