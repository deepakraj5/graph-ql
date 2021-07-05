const { registerUser, userList } = require('../../controllers/user')



module.exports = {

    Query: {
        userlist: userList
    },

    Mutation: {
        register: (_, args, context, info) => registerUser(args)
    }
}