import axios from 'axios';
import data from "../assets/data.json";


let users = data.users;
export default {
    login(name, pass) {
        return new Promise((resolve, reject) => {
            resolve(users.find((user => (user.name === name && user.password === pass))))
        });
    },
    register(user) {
      let maxid = 0;

      users.map(function(obj){     
          if (obj.id > maxid) maxid = obj.id;    
      });

      user.id = ++maxid;
      users.push(user);
    },
}
