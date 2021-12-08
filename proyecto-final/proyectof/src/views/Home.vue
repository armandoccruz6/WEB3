<template>
  <div class="home">
    
        <h1>cancioness</h1>
      <b-button to="/agregarcancion" variant="outline-primary">agregar</b-button>

    
    
   <tabla :items="canciones" :fields="campos"> 
     <template slot="actionsm" slot-scope="{item}">
        <b-button @click="onEditar(item)" variant="primary" size="sm" class="m-2">Editar</b-button>
        <b-button @click="onEliminar(item)" variant="danger" size="sm" class="m-2">Eliminar</b-button>
        <b-button  @click="onGuardarFav(item)" size="sm" pill>Añadir a Favorita</b-button>

     </template>
   </tabla>


    
  </div>
  
</template>

<script>
import Vue from'vue'
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
    
    cancion:{
                idcanciones:'idcanciones',
                id_genero:'id_genero',
                titulo:'titulo',
                artista:'artista',
                fecha:'fecha',
    },
    
    
    erroresValidacion: false
    
  }
  },
  computed: {
...mapState(['canciones']),
  },
  methods: {
    ...mapActions(['setCanciones','eliminarCancion','crearFavoritas','obtenerCancion']),

    onEditar(data){
      this.$router.push({
        name:'EditarCancion',
        params:{
          id: data.item.idcanciones
        }
      })
    },
    onEliminar(data){
      
        this.$bvModal.msgBoxConfirm('Esta opcion no se puede deshacer', {
          title: '¿Quiere eliminar la cancion?',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value){
              this.eliminarCancion({
                id: data.item.idcanciones,
                onComplete: (response) =>{
                  this.$notify({
                    type: 'success',
                    title: response.data.mensaje
                  });
                    setTimeout(() => this.setCanciones(), 1000);

                }
              })
            }
          })
          .catch(err => {
            // An error occurred
          })
       },
       
       onGuardarFav(data){    
         /*       
        this.$router.push({
        name:'favoritas',
        params:{
          id: data.item.idcanciones
          }
        })
        */        
            this.crearFavoritas({
              id: data.item.idcanciones,
            params:{id: this.idcanciones},
             //params: this.id,
            onComplete: (response) =>{

                this.$notify({
                  title:response.data.mensaje,
                  type: 'success'
                });
                this.$router.push({
                  name:'favoritas'
                });
              },
              onError:(error)=>{
                this.$notify({
                  title: error.response.data.mensaje,
                  type:'error'
                });
              }
        })
             
         
       }, 
            

  },
  mounted(){
    this.setCanciones();
  }
}
</script>
