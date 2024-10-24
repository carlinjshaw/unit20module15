import gql from 'graphql-tag';

const typeDefs = gql`
  type Class {
    _id: ID!
    name: String
    building: String
    creditHours: Int
  }

  type Query {
    classes: [Class]
  }
`;

export default typeDefs;
