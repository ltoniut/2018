import * as services from "../../services/peopleService";

export default {
  name: 'PersonList',
  components: {},
  props: {
    personas: Array    
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    borrarPersona(id) {
      services.delete(id);
    }   
  }
}
