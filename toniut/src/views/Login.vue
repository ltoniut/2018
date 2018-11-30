<template>
  <v-container>
    <v-layout row>
      <v-spacer/>
      <img alt="Vue logo" src="../assets/compass.png">
      <v-spacer/>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <login-form></login-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  name: "Login",
  components: {
    "login-form": LoginForm
  }
};
</script>