'use strict'

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');


// Creamos servidor de express
const app = express();
const port = process.env.port || 3000;

// Tipos escalares en GrahQL son: String, Integer, Float y Boolean.

/**
 * Definidmos el esquema inicial.
 * Esto devuelve un objeto en GraphQL
 */
const schema = buildSchema(`
  type Query {
    hello: String,
    goodbye: String
  }
`);

// Agregamos los resolvers
const resolvers = {
  hello: () => {
    return 'Mensaje de saludo'
  },
  goodbye: (params) => {
    return 'Mensaje de despedida'
  }
}

// Ejecutamos el query hello
// graphql(schema, '{ hello, goodbye }', resolvers).then((data) => {
//   console.log(data);

// });

// Definimos una ruta que use GraphQL
app.use('/api', gqlMiddleware({
  schema: schema,
  // Resolvers que se ejecutarán
  rootValue: resolvers,
  // Entorno de desarrolo de GraphQL que se usará
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
