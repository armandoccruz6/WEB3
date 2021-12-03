<template>
  <div>
          <b-table striped :items="items"></b-table>
  </div>
</template>

<script>
export default {
name: 'Tabla',
props:{
items: Array
},
data() {
      return {
       
      }
    }
}
</script>

<style>

</style>