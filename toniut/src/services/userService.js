import axios from 'axios';
import data from "../assets/map-data.json";


let users = data.users;
export default {
    login(name, pass) {
        return new Promise((resolve, reject) => {
            resolve(users.find((user => (user.name === name && user.password === pass))))
        });
    }
}
