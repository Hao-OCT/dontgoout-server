import { gql } from 'apollo-server-express';

const schema = gql`

  type post {
    id: ID,
    content: String,
  }
  type Query {
    hello: String,
  }
`;

export default schema;
