import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { schema, resolvers } from './graphql';
import Model from './model';

const app = express();
const PORT = process.env.PORT || 3000;

Model.connect();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`DontGoOut Server listening on port ${PORT}! GraphQL at ${server.graphqlPath}`));