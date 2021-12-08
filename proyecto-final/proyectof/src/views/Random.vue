<template>
  <div>
      <h1>cancion random</h1>
      {{canciones}}
  </div>
</template>

<script>
import{mapState,mapActions} from 'vuex';

export default {
name: 'Random',




computed:{
    ...mapState(['canciones'])
},
methods:{
    ...mapActions(['setCancionesran'])
},
created(){
    this.setCancionesran()
}

}

</script>

<style>

</style>