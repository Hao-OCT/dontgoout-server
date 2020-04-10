"use strict";

var _express = _interopRequireDefault(require("express"));

var _apolloServerExpress = require("apollo-server-express");

var _graphql = require("./graphql");

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = process.env.PORT || 3000;

_model.default.connect();

const server = new _apolloServerExpress.ApolloServer({
  typeDefs: _graphql.schema,
  resolvers: _graphql.resolvers
});
server.applyMiddleware({
  app
});
app.listen(PORT, () => console.log(`DontGoOut Server listening on port ${PORT}! GraphQL at ${server.graphqlPath}`));