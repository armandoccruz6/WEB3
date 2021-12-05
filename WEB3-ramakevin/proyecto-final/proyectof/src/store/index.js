import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    canciones: [],
    generos: [],
    cancion: {},
    
  },
  mutations: {
    SET_CANCIONES(state, canciones){
      state.canciones = canciones;
    },
    SET_GENEROS(state,generos){
      state.generos = generos;
    },
    SET_CANCION(state,cancion){
      state.cancion = cancion;
    }
    
  },
  actions: {
    setCanciones({commit}){      

      axios.get('http://localhost:3000/canciones')
      .then(response => {
        commit('SET_CANCIONES', response.data);
      })
      .catch(error = console.log(error))
    },
    setGeneros({commit}){
      
      axios.get(`http://localhost:3000/generos`)
      .then(response => {
        commit('SET_GENEROS', response.data);
      })
      .catch(error = console.log(error))
      
    },
    crearCanciones({commit}, {params, onComplete, onError}){
   axios.post('http://localhost:3000/canciones', params)
   .then(onComplete)
   .catch(onError)
    },
    crearGeneros({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3000/generos', params)
      .then(onComplete)
      .catch(onError)
       },
    obtenerCancion({commit}, {id, onComplete,onError}){
      axios.get(`http://localhost:3000/canciones/${id}`)
      .then(response => {
        commit('SET_CANCION', response.data.data);
        onComplete(response);

      })
      .catch(onError);
    },
    editarCancion({commit}, {id, onComplete,onError, params}){
      axios.put(`http://localhost:3000/canciones/${id}`, params)
      .then(onComplete)
      .catch(onError);
    },
    eliminarCancion({commit}, {id, onComplete,onError}){
      axios.delete(`http://localhost:3000/canciones/${id}`)
      .then(onComplete)
      .catch(onError);
    },
    eliminarGenero({commit}, {id, onComplete,onError}){
      axios.delete(`http://localhost:3000/generos/${id}`)
      .then(onComplete)
      .catch(onError);
    },

  },


  modules: {
  }
})
