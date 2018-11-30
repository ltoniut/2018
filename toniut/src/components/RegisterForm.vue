<template>
  <div id="register">
    <div class="form-group">
        <label for="name">Nombre: </label>
        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" v-model.trim="name">
    </div>
    <div class="form-group">
        <label for="password">Password: </label>
        <input type="password" class="form-control" name="password" id="password" v-model.trim="password">
    </div>
    <button @click="register()" class="button-primary">Registrarse</button>
  </div>
</template>

<script>
	import UserService from "../services/userService";
	import { User } from "../objects.js";
	import router from "../router.js";

	export default {
		name: "RegisterForm",
		data() {
			return {
				name: "",
				password: ""
			};
		},
		methods: {
			register() {
				if (this.name !== "" && this.password !== "") {
					const user = new User(0, this.name, this.password);
          UserService.register(user);
          router.push({ name: 'login' });
				}
			}
		}
	};
</script>
