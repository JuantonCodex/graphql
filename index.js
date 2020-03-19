'use strict'

const { graphql, buildSchema } = require('graphql');

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
graphql(schema, '{ hello, goodbye }', resolvers).then((data) => {
  console.log(data);

});