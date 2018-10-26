
<template>
    
<section id="form-person"  @keyup.enter="submitForm()">

    <div class="form-group">
        <label for="id">ID: </label>
        <input type="number" id="id" name="id"  v-model.trim="id">
    </div>

  <div class="form-group">
    <label for="name">Nombre</label>
    <input type="text" class="form-control" name="name" id="name" placeholder="ingrese name"  v-model.trim="name">

  </div>
  <div class="form-group">
    <label for="age">Edad</label>
    <input type="number" class="form-control" name="age" id="age" placeholder="age" v-model.number="age">
  </div>
   
   
  <div class="">
  <input class="form-check-input" type="radio" name="gender" id="gender" value="Varon" v-model="gender">
  <label class="form-check-label" for="gen">
    varon
  </label>
</div>
<div class="">
  <input class="form-check-input" type="radio" name="gender" id="gender" value="Mujer" v-model="gender">
  <label class="form-check-label" for="gen">
    mujer
  </label>
</div>
       <div v-if="arrError.length" v-for="error in arrError" :key="error">
            <br>{{ error }}
        </div>

  <button @click="submitForm()" class="button-primary">Update</button>
</section>
</template>

<script>
import { Person } from "./../objects.js"
import PersonService from "@/services/personService"
import router from '../router.js'

export default {
  name: "FormPerson",
  data() {
    return {
      id:0,
      name: "",
      age: 0,
      gender: "",
      arrError: []
    }
  },
  methods: {
    submitForm() {
      this.arrError = [];
      if (!this.name) {
        this.arrError.push("Llenar el campo nombre");
      }
      if(this.age<0){
          this.arrError.push("La edad no puede ser negativa");
      }
      if(!this.gender){
          this.arrError.push("Llenar el campo género");
      }
      if(this.arrError.length == 0){
        const person = new Person(this.id, this.name, this.age, this.gender);
        PersonService.update(person);
        router.push("/list");
      }
    }
  },
  created () {
    PersonService.getOne(this.$route.params.id)
      .then( (person) => {
        this.id = person.id
        this.name = person.name
        this.age = person.age
        this.gender = person.gender
        
      })
      
  }
};
</script>