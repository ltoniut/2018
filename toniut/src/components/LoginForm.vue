<template>
  <div id="login">
    <div class="form-group">
        <label for="name">Nombre: </label>
        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" v-model.trim="name">
    </div>
    <div class="form-group">
        <label for="password">Password: </label>
        <input type="password" class="form-control" name="password" id="password" v-model.trim="password"></textarea>
    </div>
    <button @click="login()" class="button-primary">Login</button><br><br>    
    <button @click="register()" class="button-primary">Registrarse</button>
  </div>
</template>

<script>
    import UserService from "../services/userService";
    import router from '../router.js';

    export default {
        name: "LoginForm",
        data() {
            return {
                name: "",
                password: ""
            }
        },
        methods: {
            login() {
                if (UserService.login(name, password)) {
                    this.$store.commit('change', name);
                    this.$store.commit('login');
                    router.push({name: 'home'});
                }
                else {
                    alert("Nombre de usuario o password incorrecto");
                }
            },
            register() {
                router.push({name: 'login'});
            }
        }
    }
</script>
