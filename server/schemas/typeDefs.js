const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Shape {
    _id: ID
    name: String
  }

  type Service {
    _id: ID
    name: String
  }

  type Waxing {
    _id: ID
    name: String
    price: Int
  }

  type Relaxation {
    _id: ID
    name: String
    price: Int
  }

  type Acrylic {
    _id: ID
    name: String
    price: Int
  }

  type Colour {
    _id: ID
    name: String
  }

  type Query {
    users: [User]
    user(username: String!): User
  
    colours: [Colour]
    colour(name: String!): Colour
    shapes: [Shape]
    shape(name: String!): Shape
    services: [Service]
    service(name: String!): Service
    waxings: [Waxing]
    waxing(name: String!): Waxing
    relaxations: [Relaxation]
    relaxaction(name: String!): Relaxation
    acrylics: [Acrylic]
    acrylic(name: String!): Acrylic
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
