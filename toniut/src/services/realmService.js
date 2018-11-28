import mapData from "../assets/map-data.json";

let maps = mapData.creations;

export default {
    getAll() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(maps)
        }, 0)
      })
    },

    create(map) {
      let maxid = 0;

      maps.map(function(obj){     
          if (obj.id > maxid) maxid = obj.id;    
      });

      map.id = ++maxid;
      maps.push(map);
    },

    /*
    delete(id) {
      getStorage();
      maps = maps.filter(map => map.id !== id);
      setStorage('people', people);
    },*/

    getOne(id) {
      return new Promise((resolve) => {
        setTimeout(
          () => {
            resolve(maps.find(map => map.id === +id));
          }, 0);
      });
    },
  }