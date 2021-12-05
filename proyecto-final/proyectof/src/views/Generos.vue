<template>
  <div>
      <h1>Generos</h1>
            <b-button to="/agregargenero" variant="outline-primary">agregar</b-button>


      <tabla :items="generos" :fields="campos">
        <template slot="actionsg" slot-scope="{item}">
            <b-button  variant="danger" size="sm">Eliminar</b-button>
        </template>
      </tabla>
        
        
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
    data(){
    return{
    campos: [
      {key: "idgenero",
      label: "idgenero"},
      {key:"genero",
      label:"genero"},

      {key: 'actions', label: 'Acciones'}
      
    ],
  }
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