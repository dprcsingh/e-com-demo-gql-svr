import { gql } from 'apollo-server-express';
const products = gql`
  type ProductResponse {
    status: Int
    message: String
    totalCount: Int
    data: [Product]
  }
  type Product {
    id: String
    name: String
    brand: String
    imageUrl: String
    description: String
    price: String
    isBanner: Boolean
    size: [Int]
    theme: Theme
  }
  type Theme {
    background: String
    color: String
  }
`;

export default products;
