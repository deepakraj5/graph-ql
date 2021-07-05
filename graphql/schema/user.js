const { gql } = require('apollo-server')

module.exports = gql`

    type UserList {
        _id: ID!
        username: String!
        email: String!
    }

    extend type Query {
        userlist: [UserList]!
    }

    type User {
        username: String!
        email: String!
        password: String!
    }

    input NewUser {
        username: String!
        email: String!
        password: String!
    }

    type UserRegister {
        username: String
        email: String
        message: String!
    }

    extend type Mutation {
        register(newUser: NewUser): UserRegister!
    }

`