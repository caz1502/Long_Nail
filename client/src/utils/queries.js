import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

// added
export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      image     
    }
  }
`;


