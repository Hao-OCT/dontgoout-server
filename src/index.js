import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { getPostList, createPost} from './model'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { schema, resolvers } from './graphql';
import Model from './model';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
Model.connect();

// const server = new ApolloServer({
//   typeDefs: schema,
//   resolvers,
//   introspection: true,
//   playground: true,
// });

// server.applyMiddleware({ app });

app.get('/', (req, res) => res.send('Hello World! DontGoOut!'));

app.get('/posts',(req,res) => {
  getPostList().then((result) => {
    res.status(200).send(result);
  })
})
app.post('/newPost', (req,res) => {
  console.log(req.body);
  createPost(req.body).then((result) => {
    res.status(200).send(result);
  });
})

app.listen(PORT, () => console.log(`DontGoOut Server...`));