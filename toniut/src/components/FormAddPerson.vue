<template>
    
<section id="form-person"  @keyup.enter="submitForm()">

  <div class="inputSpace">
    <label for="name">Nombre: </label>
    <input type="text" class="form-control" name="name" id="name" placeholder="Ingresar nombre"  v-model.trim="name">

  </div>
  <div class="inputSpace">
    <label for="age">Edad: </label>
    <input type="number" class="form-control" name="age" id="age" placeholder="age" v-model.number="age">
  </div>
   
   
  <div>
  <input class="form-check-input" type="radio" name="gender" id="gender" value="male" v-model="gender">
  <label class="form-check-label" for="gen">
    Hombre
  </label>
  <input class="form-check-input" type="radio" name="gender" id="gender" value="female" v-model="gender">
  <label class="form-check-label" for="gen">
    Mujer
  </label>
  <input class="form-check-input" type="radio" name="gender" id="gender" value="others" v-model="gender">
  <label class="form-check-label" for="gen">
    Otros
  </label>
</div>
 
  <button @click="submitForm()" class="button-primary">Agregar</button>
</section>
</template>

<script>
import { Person } from "./../objects.js";
import PersonService from "@/services/personService";

export default {
  name: "FormPerson",
  data() {
    return {
      name: "",
      age: 0,
      gender: ""
    };
  },
  methods: {
    submitForm() {
      if (
        this.name &&
        this.age>=0 &&
        this.gender

      ) {
        console.log(this.age)
        let person;
        person = new Person(
          ++this.id_counter,
          this.name,
          this.age,
          this.gender
        );
        PersonService.create(person)
      //  this.$emit("putPerson", person);
      }
    }
  }
};
</script>