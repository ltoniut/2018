
<template>
  <section id="tabla-personas">
    <header>
      <h2>People list</h2>
      <section class="row">
      <label class="" style="margin-left:300px;">genero filter </label>
      <select id="filtro_genero"  class="" v-model="gender_filter">
        <option value="" selected>Todos</option>
        <option value="Varon">Varon</option>
        <option value="Mujer">Mujer</option>
      </select>
    </section>
    </header>
           

   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
      <th scope="col">Sexo</th>
      <th scope="col">Borrar</th>
      <th scope="col">Modificar</th>
    </tr>
  </thead>
  <tbody>
        <tr v-for="(person, key) in people" :key="key">
          <td> {{ person.id }} </td>
          <td> {{ person.name }} </td>
          <td> {{ person.age }} </td>
          <td> {{ person.ggenderenero }} </td>
          <td> <button @click.prevent="deletePerson(person.id)">X</button> </td>
          <td> <router-link :to="{name:'update', params:{id: person.id}}">Modificar</router-link> </td>
        </tr>
      </tbody>
</table>
  </section>
</template>

<script>
import { Person } from "./../objects.js"
import PersonService from '@/services/personService' 

export default {
  name: "tablePerson",
  data() {
    return {
      people: [],
      gender_filter: ""
    }
  },
  /*
  computed: {
    
    filtrar_personas() {
      let listReturn = this.list_persons;
      if (this.personas_filtro !== "" && this.personas_filtro!=='Todos') {
        listReturn = this.list_persons.filter(
          people => person.gender === this.personas_filtro
        );
      }
      return listReturn;
    }
  },
  */
  methods: {
    deletePerson (id) {
     // this.$emit('eliminar_person', key)
     PersonService.delete(id)
      PersonService.getAll()
          .then( (people) => {
            this.people = people
          })
    }
  },
  watch: {
    gender_filter () {
      PersonService.getByGender(this.gender_filter)
        .then( (people) => {
          this.people = people
        })
    }
  },
  created() {
    PersonService.getAll()
      .then((people) => {
        this.people = people
      })
  }
};
</script>
