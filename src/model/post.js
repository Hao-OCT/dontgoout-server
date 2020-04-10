import { db } from './index';

export async function getPostList() {
  if (!db) { throw new Error(); }
  const postsCollection = db.collection('posts');
  return await postsCollection.find( {} ).toArray()
    .catch((err) => { throw err; })
    .then((posts) => posts);
}
export async function createPost(newPost) {
  if (!db) { throw new Error(); }
  const postsCollection = db.collection('posts');
  return await postsCollection.insertOne(newPost)
  .catch((err) => { throw err; })
  .then((item) => item.ops[0]);
}