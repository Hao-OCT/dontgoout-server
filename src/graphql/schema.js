import { gql } from 'apollo-server-express';

const schema = gql`

  type Post {
    _id: ID,
    content: String,
    title: String!,
  }
  type Query {
    posts: [Post],
  }
  type Mutation {
    createPost(input: PostInput!): Post,
  }
  input PostInput {
    title: String!,
    content: String,
  }
`;

export default schema;
