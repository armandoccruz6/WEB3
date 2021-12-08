const express = require('express');

const routes = express.Router();

const cancionesController = require('../controllers/cancionesController')
//rutas canciones 
routes.get('/canciones', cancionesController.listar);
routes.get('/canciones/:id', cancionesController.obtenerCanciones);
routes.post('/canciones', cancionesController.crear);
routes.put('/canciones/:id',cancionesController.editar);//para ingresar a la bd datos
routes.delete('/canciones/:id',cancionesController.eliminar);

module.exports = routes;