<template>
  <div>
      <h1>Generos</h1>
            <b-button to="/agregargenero" variant="outline-primary">agregar</b-button>


      <tabla :items="generos" :fields="campos">
           <template slot="actionsg" slot-scope="{item}">
            <b-button  @click="onEliminar(item)" variant="danger" size="sm">Eliminar</b-button>
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
        ...mapActions(['setGeneros', "eliminarGenero"]),
        onEliminar(data){
      this.$bvModal.msgBoxConfirm('ESTA OPCION NO SE PUEDE DESHACER', {
          title: 'ESTAS SEGURO QUE DESEAS ELIMINAR?',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Aceptar',
          cancelTitle: 'Cancelar',
          centered: true
        })
          .then(value => {
            this.eliminarGenero({
              id: data.item.idgenero,
              onComplete: (response)=>{
                this.$notify({
                  type: 'success',
                  title: response.data.mensaje
                });
                setTimeout(()=>this.setGeneros(), 1000);
              }
            })
          })
          .catch(err => {
            // An error occurred
          })
    }
    },
    created(){
        this.setGeneros();
    }    


}


</script>

<style>

</style>