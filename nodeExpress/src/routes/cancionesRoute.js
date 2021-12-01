const express = require('express');

const routes = express.Router();

const cancionesController = require('../controllers/cancionesController')

routes.get('/', cancionesController.listar);

module.exports = routes;