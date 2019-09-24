const express = require('express')
const handle = require('express-async-handler')
const controllers = require('./app/controllers')

const routes = express.Router()
routes.get('/', handle(controllers.HomeController.index))

module.exports = routes
