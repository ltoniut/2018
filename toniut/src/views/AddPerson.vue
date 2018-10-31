<template>
  <v-app>
  <section id="add-person">
    <form-add-person></form-add-person>
  </section>
  </v-app>
</template>
<script>
import FormAddPerson from '@/components/FormAddPerson.vue';
export default {
  name: 'AddPerson',
  components: {
    FormAddPerson
  }
}
</script>