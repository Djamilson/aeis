require('dotenv').config()
const path = require('path')
const express = require('express')
const viewPath = path.join(__dirname, 'app/views')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
  }
  views () {
    this.express.use(express.static(path.resolve(__dirname, 'public')))

    this.express.set('views', viewPath)
    this.express.set('view engine', 'ejs')
  }
  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
