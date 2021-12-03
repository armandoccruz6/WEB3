<template>
  <div class="home">
   <tabla :items="canciones"/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import tabla from '../components/tabla.vue'
export default {
  name: 'Home',
  components: {
    tabla
  },
  computed: {
...mapState(['canciones'])
  },
  methods: {
    ...mapActions(['setCanciones'])
  },
  created(){
    this.setCanciones();
  }
}
</script>
