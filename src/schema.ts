import { gql } from 'apollo-server-express';

const main = gql`
  type Query {
    getProducts: ProductResponse
  }
`;
export default main;
