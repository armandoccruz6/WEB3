const express = require('express');

const routes = express.Router();

const cancionesController = require('../controllers/cancionesController')

routes.get('/canciones', cancionesController.listar);
routes.get('/canciones/:id', cancionesController.obtenerCanciones);
routes.post('/canciones', cancionesController.crear)

module.exports = routes;