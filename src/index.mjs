import { ApolloServer } from 'apollo-server';

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { typeDefs } from '../schema/queryTypes/index.js';
import { resolvers } from '../schema/resolvers/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});
  
  // The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});