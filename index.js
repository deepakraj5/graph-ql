const { ApolloServer } = require('apollo-server')

require('./db/mongoose')

const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

const PORT = 3001 || process.env.PORT

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({ port: PORT }).then(() => {
    console.log(`server upon port ${PORT}`)
})