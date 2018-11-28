<template>
  <div id="login">
    <div class="form-group">
        <label for="name">Nombre: </label>
        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" v-model.trim="name">
    </div>
    <div class="form-group">
        <label for="password">Password: </label>
        <textarea class="form-control" name="description" id="description" placeholder="Descripcion" v-model.trim="password"></textarea>
    </div>
    <button @click="login()" class="button-primary">Login</button>
  </div>
</template>

<script>
    import UserService from "../services/userService";

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
                changed: function(event) {
                    if (UserService.login(name, password)) {
                        this.$store.commit('change', name);
                        this.$store.commit('login');
                    }
                }
            }
        };
    }
</script>
