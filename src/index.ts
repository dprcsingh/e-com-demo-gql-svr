import * as modules from './modules';
import { mergeTypeDefs } from 'graphql-tools';
import mergeResolver from './libs/mergeResolver';
import { schemaArray } from './schemaArray';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import config from './config/configuration';
const typeDefs = mergeTypeDefs(schemaArray);
const resolvers = mergeResolver(modules);
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { port } = config;
server.applyMiddleware({ app, path: '/', cors: true });
app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
);
