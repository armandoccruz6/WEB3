<template>
  <div>
      <h1>Canciones Favoritas</h1>
      
      <tabla :items="favoritas" :fields="campos">
        <template slot="actionsg" slot-scope="{item}">
            <b-button @click="onEliminar(item)" variant="danger" size="sm">Eliminar</b-button>
       
        </template>
      </tabla>


  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import tabla from '../components/tabla.vue'
export default {
 name: 'Favoritas',
 components:{
   tabla
 },
 data(){
   return{
     campos:[
       {key: "idfavoritas",label: "favoritasid"},
        {key: "id_canciones",label: "idcancion"},
        {key: "titulo",label: "Titulo"},
        {key: "artista",label: "Artista"},
        {key: "fecha",label: "Fecha"},
        
        {key: 'actions', label: 'Acciones'}
        
     ],
   }
 },


 computed:{
   ...mapState(['favoritas'])
 },
 methods:{
   ...mapActions(['setFavoritas','eliminarFavorita']),
   onEliminar(data){

          this.$bvModal.msgBoxConfirm('Esta opcion no se puede deshacer', {
          title: '¿Quiere eliminarla de favoritos?',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            if(value){
              this.eliminarFavorita({
                id: data.item.idfavoritas,
                onComplete: (response) =>{
                  this.$notify({
                    type: 'success',
                    title: response.data.mensaje
                  });
                    setTimeout(() => this.setFavoritas(), 1000);

                }
              })
            }
          })
          .catch(err => {
            // An error occurred
          })

        }

 },

 mounted(){
   this.setFavoritas();
 },
}
</script>

<style>

</style>