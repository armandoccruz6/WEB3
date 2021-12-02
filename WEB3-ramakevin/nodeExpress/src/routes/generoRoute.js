const express = require('express');

const routes = express.Router();

const generoController = require('../controllers/generoController')

routes.get('/generos', generoController.listar);

module.exports = routes;