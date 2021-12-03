import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    canciones: []
  },
  mutations: {
    SET_CANCIONES(state, canciones){
      state.canciones = canciones;
    }
  },
  actions: {
    setCanciones({commit}){
      axios.get('http://localhost:3000/canciones')
      .then(response => {
        commit('SET_CANCIONES', response.data);
      })
    }
  },
  modules: {
  }
})
