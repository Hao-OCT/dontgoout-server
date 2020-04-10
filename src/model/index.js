import { MongoClient } from 'mongodb';
export { getPostList, createPost } from './post';
const mongoUsername = 'admin';
const mongoPassword = 'adminPassword';

const connectionURL = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0-xo6ou.mongodb.net/test`;

const client = new MongoClient(connectionURL, { useUnifiedTopology: true });
const dbName= 'dontgoout-database-dev';
export let db = null;
let _connected = false;

export function connect(callback){
  if (!_connected) {
    console.log('Database Connecting...');
    client.connect((error) => {
      _connected = true;
      if (error) { throw error; }
      if (callback) { callback(error, client); }
      console.log('Database Connected');
      db = client.db(dbName);
    });
  }
}

export async function disconnect(force = false){
  if (_connected || force) {
    await client.close(force);
  }z
  _connected = false;
  console.log('Database Disconnected');
}


export default {
  db,

  connect,
  disconnect,
};
