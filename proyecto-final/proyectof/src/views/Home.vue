<template>
  <div class="home">
    
        <h1>cancioness</h1>
      <b-button to="/agregarcancion" variant="outline-primary">agregar</b-button>

    
    
   <tabla :items="canciones" :fields="campos"> 
     <template slot="actionsm" slot-scope="{item}">
        <b-button @click="onEditar(item)" variant="primary" size="sm" class="m-2">Editar</b-button>
        <b-button @click="onEliminar(item)" variant="danger" size="sm">Eliminar</b-button>

     </template>
   </tabla>


    
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
  data(){
    return{
    campos: [
      {key: "idcanciones",
      label: "idcanciones"},
      {key:"id_genero",
      label:"id_genero"},
      {key:"titulo",
      label:"titulo"},
      {key:"artista",
      label:"artista"},
      {key:"fecha",
      label:"fecha"},
      {key: 'actions', label: 'Acciones'}
      
    ],
  }
  },
  computed: {
...mapState(['canciones']),
  },
  methods: {
    ...mapActions(['setCanciones']),
    onEditar(data){
      this.$router.push({
        name:'EditarCancion',
        params:{
          id: data.item.idcanciones
        }
      })
    },
    onEliminar(data){
      alert(data.item.idcanciones)
    }

  },
  mounted(){
    this.setCanciones();
  }
}
</script>
