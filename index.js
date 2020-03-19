'use strict'

const { graphql, buildSchema } = require('graphql');

// Tipos escalares en GrahQL son: String, Integer, Float y Boolean.

// Definimos en esquema inciail.
// Esto Devuelve un objeto de GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Ejecutamos el query hello
graphql(schema, '{ hello }').then((data) => {
  console.log(data);

});