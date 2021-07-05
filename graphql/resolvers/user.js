const { registerUser } = require('../../controllers/user')



module.exports = {
    Mutation: {
        register: (_, args, context, info) => registerUser(args)
    }
}