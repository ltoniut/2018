import data from "../assets/data.json";

let maps = data.creations;

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

    populate() {
      let payload = {
        token: "OtOVWvqrKbW8niXKhicZ2A",
        data: {
          id: ++maxid,
          name: "nameFirst",
          description: "Datos generados automáticamente, cortesía de app.fakejson.com",
          imageVariants: [
            {
                id: 1,
                url: "https://i.imgur.com/qyEq1S5.jpg",
                name: "Clean",
                default: false
            }
          ],
            realms: [{
              id: 1,
              name: "nameFirst",
              cities: [
                {
                  id: 1,
                  name: "nameFirst"
                },
                {
                  id: 2,
                  name: "nameFirst"
                }
              ]
          }],
          _repeat: 5
        }
      };
      
      axios({
        method: "post",
        url: "api/app.fakejson.com/q",
        data: payload
      }).then(function(resp) {
        maps.push(payload);
      });
    },

    getOne(id) {
      return new Promise((resolve) => {
        setTimeout(
          () => {
            resolve(maps.find(map => map.id === +id));
          }, 0);
      });
    },
  }