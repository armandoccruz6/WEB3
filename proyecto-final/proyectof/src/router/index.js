import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/generos',
    name: 'Generos',
    
    component: () => import( '../views/Generos.vue')
  },
  {
    path: '/agregarcancion',
    name: 'AgregarCancion',
    
    component: () => import( '../views/AgregarCancion.vue')
  },
  {
    path: '/agregargenero',
    name: 'AgregarGenero',
    
    component: () => import( '../views/AgregarGenero.vue')
  },
  {
    path: '/editarcancion',
    name: 'EditarCancion',
    
    component: () => import( '../views/EditarCancion.vue')
  },
  {
    path: '/favoritas',
    name: 'Favoritas',
    
    component: () => import( '../views/Favoritas.vue')
  },
  {
    path: '/random',
    name: 'Random',
    
    component: () => import( '../views/Random.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
