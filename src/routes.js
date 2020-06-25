const express = require('express');
const routes = express.Router();

const userController = require('./controller/PostController')

routes.get('/all', userController.index)
routes.post('/create', userController.create)
routes.post('/del', userController.delete)

module.exports = routes 