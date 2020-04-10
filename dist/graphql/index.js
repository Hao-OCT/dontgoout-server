"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.resolvers = exports.schema = void 0;

var _schema = _interopRequireDefault(require("./schema"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * GraphQL Initialization
 */
const schema = _schema.default;
exports.schema = schema;
const resolvers = _resolvers.default;
exports.resolvers = resolvers;
var _default = {
  schema,
  resolvers
};
exports.default = _default;