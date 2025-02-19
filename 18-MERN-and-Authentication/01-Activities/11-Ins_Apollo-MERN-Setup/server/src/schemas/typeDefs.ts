import gql from 'graphql-tag';

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String
    skills: [String]!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

export default typeDefs;
