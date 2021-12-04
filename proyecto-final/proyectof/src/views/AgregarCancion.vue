<template>
  <div>
      <h1>Agregar cancion</h1>
      <b-form @submit.prevent="guardarPersona">
          <Input
          v-model="cancion.id_genero"
            titulo="genero id"
            id="id_genero"
            :error="true"
            placeholder="Ingrese el id al que pertenece el genero"
            :maxlength="100"
            />
            <Input
            v-model="cancion.titulo"
            titulo="Titulo"
            id="titulo"
            :error="true"
            placeholder="Ingrese el titulo de la cancion"
            :maxlength="50"
            />
            <Input
            v-model="cancion.artista"
            titulo="Artista"
            id="artista"
            :error="true"
            placeholder="Ingrese el nombre del artista"
            :maxlength="80"
            />
            <Input
            v-model="cancion.fecha"
            titulo="Fecha"
            id="fecha"
            :error="true"
            placeholder="Ingrese la fecha de lanzamiento"
            :maxlength="4"
            />
                  <b-button type="submit" variant="success">Guardar</b-button>

            
      </b-form>
      <div>
          <h2 class="eG">Generos que se encuentran registrados</h2>
            <tabla :items="generos"/>
      </div>
  </div> 
</template>

<script>
import { mapState,mapActions } from 'vuex'
import Input from '../components/Input.vue'
import tabla from '../components/tabla.vue'

export default {
    name: 'AgregarCancion',
    components: {
        Input,
        tabla
    },
    data(){
        return{
            cancion: {
                id_genero:'',
                titulo:'',
                artista:'',
                fecha:'',

            }
        }
    },
    computed:{
        ...mapState(['generos'])
    },
    methods:{
        ...mapActions(['setGeneros']),
        guardarPersona(){
            alert("guardar")
        }
    },
    created(){
        //terminar este y el de agreagarGenero
        this.setGeneros();
    }
}


</script>

<style>
.eG{
    font-family:  monospace;
    color: forestgreen;
}
</style>