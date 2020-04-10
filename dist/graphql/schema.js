"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

const schema = (0, _apolloServerExpress.gql)`

  type post {
    id: ID,
    content: String,
  }
  type Query {
    hello: String,
  }
`;
var _default = schema;
exports.default = _default;