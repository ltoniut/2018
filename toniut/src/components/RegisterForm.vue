<template>
	<v-form @submit="register()">
    <v-card>
			<v-card-title>
				Registro
			</v-card-title>
      <v-card-text>
        <v-text-field label="Nombre" single-line v-model.trim="name"/>
        <v-text-field type="password" label="Password" single-line v-model.trim="password"/>
      </v-card-text>
      <v-card-actions>
				<v-spacer/>
        <v-btn type="submit" color="accent">Registrarse</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
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
