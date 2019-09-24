const server = require('./server')
const port = process.env.PORT || 3000
server.listen(port, err => {
  if (err) {
    console.log('Não foi possível iniciar o servidor!')
  } else {
    console.log('DevShop Rondando ...')
  }
})
