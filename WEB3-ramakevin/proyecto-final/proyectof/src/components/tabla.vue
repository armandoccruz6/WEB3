<template>
  <div>
    <b-table striped :items="items" :busy="busy" :fields="fields">
    <template #cell(actions)="data">
        <slot name="actions" :item="data"></slot>
    </template>
    </b-table>
  </div>
</template>

<script>
export default {
name: 'Tabla',
props:{
items: Array,
fields:{
type: Array,
default: []
},

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