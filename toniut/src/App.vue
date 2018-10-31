<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<template>
  <v-app dark>
    <v-card class="text-md-center" align="center">
      <div id="app">
        <div id="nav">
          <router-link to="/">Agregar</router-link> |
          <router-link to="/list">Listar</router-link> |
        </div>
        <router-view/>
      </div>
    </v-card>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data () {
      return {
        //
      }
    }
  }
</script>
