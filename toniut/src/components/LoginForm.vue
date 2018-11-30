<template>
  <v-form @submit="login()">
    <v-card>
      <v-card-title>
        Iniciar sesion
      </v-card-title>
      <v-card-text>
        <v-text-field label="Nombre" single-line v-model.trim="name"/>
        <v-text-field type="password" label="Password" single-line v-model.trim="password"/>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn @click="login()" color="primary">Ingresar</v-btn>
        <v-btn @click="register()" color="accent">Registrarse</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import UserService from "../services/userService";

export default {
  name: "LoginForm",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    login() {
      UserService.login(this.name, this.password).then(
        token => {
          this.$store.commit("change", name);
          this.$store.commit("login", token);
          this.$router.push({ name: "home" });
        },
        error => {
          alert("Nombre de usuario o contraseña incorrectos");
        }
      );
    },
    register() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>
