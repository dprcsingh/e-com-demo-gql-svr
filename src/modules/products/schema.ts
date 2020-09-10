import { gql } from 'apollo-server-express';
const products = gql`
  type ProductResponse {
    status: Int
    message: String
    data: [Product]
  }
  type Product {
    id: String
    name: String
    brand: String
    imgUrl: String
    description: String
    price: Int
    size: [Int]
  }
`;

export default products;
