const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String!
    image: String!
    link: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    books(searchTerm: String!): [Book]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
  }

  input BookInput {
    title: String!
    author: String!
    description: String!
    image: String!
    link: String!
  }
`;

module.exports = typeDefs;