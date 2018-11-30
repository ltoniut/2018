<template>
  <v-container>
    <v-layout row>
      <v-spacer/>
      <img alt="Vue logo" src="../assets/compass.png">
      <v-spacer/>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <register-form></register-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RegisterForm from "../components/RegisterForm";

export default {
  name: "Register",
  components: {
    "register-form": RegisterForm
  }
};
</script>