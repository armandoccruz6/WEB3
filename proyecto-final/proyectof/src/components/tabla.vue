<template>
  <div>
    <b-table striped :items="items" :busy="busy" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
name: 'Tabla',
props:{
items: Array,

busy: {
  type: Boolean,
  default: false
},
},

data() {
  return {};
    },
}
</script>

<style>

</style>