"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;
exports.disconnect = disconnect;
exports.default = void 0;

var _mongodb = require("mongodb");

const mongoUsername = 'admin';
const mongoPassword = 'adminPassword';
const connectionURL = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0-xo6ou.mongodb.net/test`;
const client = new _mongodb.MongoClient(connectionURL, {
  useUnifiedTopology: true
});
const dbName = 'dontgoout-database-dev';
let db = null;
let _connected = false;

function connect(callback) {
  if (!_connected) {
    console.log('Database Connecting...');
    client.connect(error => {
      _connected = true;

      if (error) {
        throw error;
      }

      if (callback) {
        callback(error, client);
      }

      console.log('Database Connected');
      db = client.db(dbName);
    });
  }
}

async function disconnect(force = false) {
  if (_connected || force) {
    await client.close(force);
  }

  z;
  _connected = false;
  console.log('Database Disconnected');
}

var _default = {
  connect,
  disconnect,
  db
};
exports.default = _default;