<template>
  <div>
      <h1>Generos</h1>
            <b-button to="/agregargenero" variant="outline-primary">agregar</b-button>


      <tabla :items="generos" />
  </div>
</template>

<script>
import{mapState,mapActions} from 'vuex';
import tabla from '../components/tabla.vue'
export default {
    name: 'Generos',
    components:{
        tabla
    },
    
    computed:{
        ...mapState(['generos']),
    },
    methods:{
        ...mapActions(['setGeneros'])
    },
    created(){
        this.setGeneros();
    }    


}


</script>

<style>

</style>