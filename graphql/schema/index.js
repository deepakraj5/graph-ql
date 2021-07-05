const { gql } = require('apollo-server')
const userSchema = require('./user')

module.exports = gql`

    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }

    # ${userSchema}

`