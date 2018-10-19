<template>
  <div id="app">
    <PersonHeader v-bind:count = personas.length></PersonHeader>
    <PersonForm v-bind:service = this.service></PersonForm>
    <PersonList v-bind:service = this.service></PersonList>
  </div>
</template>

<script>
import PersonHeader from './components/header/index.vue'
import PersonForm from './components/form/index.vue'
import PersonList from './components/list/index.vue'
import * as service from './services/peopleService'

export default {
  name: 'app',
  data () {
    return {
      personas: service.people,
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
