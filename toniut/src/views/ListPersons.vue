<template>
  <section id="list-person">
    <table-persons></table-persons>
  </section>
</template>
<script>
import TablePersons from '@/components/TablePersons.vue'
export default {
  name: 'ListPerson',
  components: {
    TablePersons
  }
}
</script>