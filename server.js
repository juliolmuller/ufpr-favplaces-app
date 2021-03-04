const database = require('./db.json')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()
const PORT = process.env.PORT || 8080 // eslint-disable-line no-magic-numbers

server.use(middleware)
server.use(router)

server.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`    JSON-Server is running at localhost port ${PORT}`)
  console.log('')
  console.log('    Available endpoints:')

  Object.keys(database).forEach((endpoint) => {
    console.log(`        /${endpoint}`)
  })
})
