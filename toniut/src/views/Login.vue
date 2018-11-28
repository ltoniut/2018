<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/compass.png">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>