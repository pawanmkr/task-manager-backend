import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Book {
    id: ID
    name: String
  }

  type Query {
    books: [Book]
  }
`;