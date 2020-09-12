import * as modules from './modules';
import { mergeTypeDefs } from 'graphql-tools';
import mergeResolver from './libs/mergeResolver';
import { MongoClient } from 'mongodb';
import { schemaArray } from './schemaArray';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import config from './config/configuration';
const typeDefs = mergeTypeDefs(schemaArray);
const resolvers = mergeResolver(modules);
const app = express();
const mongoUrl =
  'mongodb+srv://user:user@cluster0.5vxwh.mongodb.net/e-com?retryWrites=true&w=majority';
let db: any;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    if (!db) {
      try {
        MongoClient.connect(mongoUrl, async (err, client) => {
          if (err) return console.log(err);
          db = client.db('e-com');
        });
      } catch (err) {
        console.log('Error while connecting database', err);
      }
    }
    return { db };
  },
});

const { port } = config;
server.applyMiddleware({ app, path: '/', cors: true });

app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
);
