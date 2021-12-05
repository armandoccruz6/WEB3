<template>
  <div>
      <h1>Editar Cancion</h1>
      <b-form @submit.prevent="guardarCancion">
          <!--
          <Input
          
          v-model="cancion.id_genero"
            titulo="genero id"
            id="id_genero"
            :error="erroresValidacion && !validacionNombre"
            placeholder="Ingrese el id al que pertenece el genero"
            :maxlength="100"
            />
            -->
            <Input
            titulo="Clave"
            id="idcanciones"
            :value=cancion.idcanciones
            disabled
            />
            <Input
            v-model="cancion.titulo"
            titulo="Titulo"
            id="titulo"
            :error="erroresValidacion && !validacionNombre"
            placeholder="Ingrese el titulo de la cancion"
            :maxlength="50"
            />
            <Input
            v-model="cancion.artista"
            titulo="Artista"
            id="artista"
            :error="erroresValidacion && !validacionNombre"
            placeholder="Ingrese el nombre del artista"
            :maxlength="80"
            />
            <Input
            v-model="cancion.fecha"
            titulo="Fecha"
            id="fecha"
            :error="erroresValidacion && !validacionNombre "
            placeholder="Ingrese la fecha de lanzamiento"
            :maxlength="4"
            />
                  <b-button type="submit" variant="success">Guardar</b-button>

            
      </b-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState,mapActions } from 'vuex'
import Input from '../components/Input.vue'
import tabla from '../components/tabla.vue'

export default {
    name: 'EditarCancion',
    components: {
        Input,
        tabla
    },
    data(){
        return{
            cancion: {
                //id_genero:'',
                idcanciones:0,
                titulo:'',
                artista:'',
                fecha:'',

            },
            erroresValidacion: false
        };
    },
    computed:{
        //...mapState(['generos']),
        validacionNombre(){
            return( this.cancion.titulo !==undefined &&
            this.cancion.titulo.trim() !== '')
        }
    },
    methods:{
        ...mapActions(['obtenerCancion']),
        guardarCancion(){
            if(this.validacionNombre){
                this.erroresValidacion=false;
                /*this.crearCanciones({
                    params: this.cancion,
                    onComplete: (response) =>{
                    
                        this.$notify({
                    title:response.data.mensaje,
                    type: 'success'
                        });              
                    this.$router.push({
                    name: 'Home'
                });
                    },
                    onError:(error) =>{
                        this.$notify({
                    title: error.response.data.mensaje,
                    type: 'error'
                        });
            },
            });*/
            }
            else{
                this.erroresValidacion=true;
            }
            
        },
        
    },
    created(){
        this.obtenerCancion({
            id: this.$route.params.id,
            onComplete: (response)=>{
                Vue.set(this,'cancion',response.data.data);
            }
        })
    }

};
</script>

<style>

</style>