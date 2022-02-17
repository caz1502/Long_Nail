import { gql } from "@apollo/client";

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

export const QUERY_ALL_SERVICE = gql`
  query getServices {
    services {
      _id
      name
      description
      image
         }
  }
`;

export const QUERY_SINGLE_SERVICE = gql`
  query getSingleService($serviceId: ID!) {
    service(serviceId: $serviceId) {
      _id
      name
      description
      image
    }
  }
`;

export const QUERY_ALL_COLOUR = gql`
  query getColours {
    colours {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_COLOUR = gql`
  query getSingleColour($colourId: ID!) {
    colour(colourId: $colourId) {
      _id
      name
    }
  }
`;

export const QUERY_ALL_SHAPE = gql`
  query getShapes {
    shapes {
      _id
      name
      image
    }
  }
`;

export const QUERY_SINGLE_SHAPE = gql`
  query getSingleShape($shapeId: ID!) {
    shape(shapeId: $shapeId) {
      _id
      name
      image
    }
  }
`;

export const QUERY_ALL_ACRYLIC = gql`
  query getAcrylics {
    acrylics {
      _id
      name
      price
    }
  }
`;

export const QUERY_SINGLE_ACRYLIC= gql`
  query getSingleAcrylic($acrylicId: ID!) {
    acrylic(acrylicId: $acrylicId) {
      _id
      name
      price
    }
  }
`;

export const QUERY_ALL_RELAXATION = gql`
  query getRelaxations {
    relaxations {
      _id
      name
      price
    }
  }
`;

export const QUERY_SINGLE_RELAXATION = gql`
  query getSingleRelaxation($relaxationId: ID!) {
    relaxation(relaxationId: $relaxationId) {
      _id
      name
      price
    }
  }
`;

export const QUERY_ALL_WAXING = gql`
  query getWaxings {
    waxings {
      _id
      name
      price
    }
  }
`;
