<template>
  <div>
    <img alt="Vue logo" src="../assets/compass.png">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
import router from '../router.js';

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>