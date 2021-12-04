const express = require('express');

const routes = express.Router();

const generoController = require('../controllers/generoController')
//rutas generos 
routes.get('/generos', generoController.listar);
//routes.get('/generos/:id',generoController.obtenerGeneros);
routes.post('/generos',generoController.crear);
routes.delete('/generos/:id',generoController.eliminar);


module.exports = routes;