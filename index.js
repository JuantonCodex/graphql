'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers.js')

// Creamos servidor de express
const app = express()
const port = process.env.port || 3000

/**
 * Definimos el esquema inicial.
 * Esto devuelve un objeto en GraphQL
 */
const schema = buildSchema(
  readFileSync(
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
  )
)

// Definimos una ruta que use GraphQL
app.use('/api', gqlMiddleware({
  schema: schema,
  // Resolvers que se ejecutarán
  rootValue: resolvers,
  // Entorno de desarrolo de GraphQL que se usará
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
