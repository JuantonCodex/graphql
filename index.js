'use strict'

const { graphql, buildSchema } = require('graphql');

// Tipos escalares en GrahQL son: String, Integer, Float y Boolean.

/**
 * Definidmos el esquema inicial. Esto devuelve un objeto en GraphQL
 */
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Ejecutamos el query hello
graphql(schema, '{ hello }').then((data) => {
  console.log(data);

});