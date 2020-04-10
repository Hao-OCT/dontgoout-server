import { getPostList, createPost } from '../model';

const resolvers = {
  Query: {
    posts: () => getPostList(),
  },
  Mutation: {
    createPost: async (parent, args, context, info) => await createPost(args.input),
  }
};

export default resolvers;
