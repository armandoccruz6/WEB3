const express = require('express');

const routes = express.Router();

const favoritasController = require('../controllers/favoritasController')

routes.get('/favoritas', favoritasController.listar);
routes.post('/favoritas', favoritasController.crear);

module.exports = routes;