<template>
  <div>
      <h1>Agregar un Genero</h1>
      <b-form @submit.prevent="guardarGenero">
          <Input
          v-model="gene.genero"
            titulo="Genero"
            id="genero"
            :error="erroresValidacion && !validacionNombre"
            placeholder="ingresa un genero nuevo"
            :maxlength="50"
            />
            
           
                  <b-button type="submit" variant="success">Guardar</b-button>

            
      </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Input from '../components/Input.vue'

export default {
    name: 'AgregarGenero',
    components: {
        Input,
    },
    data(){
        return{
            gene:{
                genero:'',
            },
            erroresValidacion: false
        }
    },
    computed:{
       validacionNombre(){
            return( this.gene.genero !==undefined &&
            this.gene.genero.trim() !== '')
        }
    },
    methods:{
        ...mapActions(['crearGeneros']),

        guardarGenero(){
 if(this.validacionNombre){
                this.erroresValidacion=false;
                this.crearGeneros({
                    params: this.gene,
                    onComplete: (response) =>{
                    
                        this.$notify({
                    title:response.data.mensaje,
                    type: 'success'
                        });              
                    this.$router.push({
                    name: 'Generos'
                });
                    },
                    onError:(error) =>{
                        this.$notify({
                    title: error.response.data.mensaje,
                    type: 'error'
                        });
            },
            });
            }
            else{
                this.erroresValidacion=true;
            }
            alert("guardar")
        }
    }

}
</script>

<style>

</style>