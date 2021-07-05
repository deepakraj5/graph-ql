const { gql } = require('apollo-server')

module.exports = gql`

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