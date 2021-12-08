<template>
  <div id="app">
    <div class="barra" id="nav">
      <router-link to="/">Canciones</router-link> |
      <router-link to="/generos">Generos</router-link> |
      <router-link to="/favoritas">Favoritas</router-link> |
      <router-link to="/random">Random</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="m-4"/>
    <notifications />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #25b312;
}

#nav a.router-link-exact-active {
  color: #dd690a;
  
}

.barra{
  color: rgb(255, 51, 0);
}
</style>
