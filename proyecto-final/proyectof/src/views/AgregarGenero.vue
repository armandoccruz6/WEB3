<template>
  <div>
      <h1>Agregar un Genero</h1>
      <b-form @submit.prevent="guardarGenero">
          <Input
          v-model="gene.genero"
            titulo="Genero"
            id="genero"
            :error="true"
            placeholder="ingresa un genero nuevo"
            :maxlength="50"
            />
            
           
                  <b-button type="submit" variant="success">Guardar</b-button>

            
      </b-form>
  </div>
</template>

<script>
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
            }
        }
    },
    methods:{
        guardarGenero(){
            //terminar
            alert("guardar")
        }
    }

}
</script>

<style>

</style>