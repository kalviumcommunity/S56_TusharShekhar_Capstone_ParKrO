const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    id: ID!
    email: String
    password: String
  }

  type QueryDetail {
    id: ID!
    fullname: String
    email: String
    MobileNo: String
    City: String
    query: String
  }

  type QrCodeDetail {
    id: ID!
    fullname: String
    vehicle: String
    mobile: Int
    vehicleNo: String
    location: String
    qrimg: String
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
    getAllQueries: [QueryDetail]
    getQrCodes: [QrCodeDetail]
  }

  type Mutation {
    createUser(email: String!, password: String!): User
    createQuery(fullname: String!, email: String!, MobileNo: String!, City: String!, query: String!): QueryDetail
    createQrCode(fullname: String!, vehicle: String!, mobile: Int!, vehicleNo: String!, location: String!): QrCodeDetail
  }
`);

module.exports = schema;
