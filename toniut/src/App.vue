<template>
  <div id="app">
    <PersonHeader v-bind:count = this.personas.length></PersonHeader>
    <PersonForm v-bind:personas = this.personas @push-persona="putPerson"></PersonForm>
    <PersonList @borrar-persona="deletePerson" v-bind:personas= this.personas></PersonList>
  </div>
</template>

<script>
import PersonHeader from './components/header/index.vue'
import PersonForm from './components/form/index.vue'
import PersonList from './components/list/index.vue'

export default {
  name: 'app',
  data () {
    return {
      personas: [],
    }
  },
  methods: {
    putPerson (person) {
      if (person) {
        this.personas.push(person);
      }
    },
    editPerson (person) {
      persona p = personas.find (p => p.id === person.id);
      if (persona) {
        persona = person;
      }
    },
    deletePerson (id) {
      this.personas = this.personas.filter(person => person.id !== id);
    },
    getPersons (filter, limit, start) {
      
    }
  },
  components: {
    PersonHeader,
    PersonForm,
    PersonList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
