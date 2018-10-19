import { Persona, EmptyPerson } from "../../prototypes/Person";
import create from "../../services/peopleService";


export default {
  name: 'PersonForm',
  components: {},
  props: {
    
  },
  data () {
    return {
      persona: {
        nombre: "",
        edad: 0,
        sexo: 'm',
        id: 0
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    agregar() {
      if (this.persona.nombre != "" && this.persona.edad >= 0) {
        create(this.persona);

        this.persona = EmptyPerson(newId);
      }
    }
  }
}
