<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/compass.png">
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";

export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>