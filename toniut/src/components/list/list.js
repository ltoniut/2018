import * as services from "../../services/peopleService";

export default {
  name: 'PersonList',
  components: {},
  props: {
    service    
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
      service.delete(id);
    }
  }
}
