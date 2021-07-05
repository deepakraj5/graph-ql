const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')
 


const registerUser = async (data) => {
    try {

        console.log(data.newUser)

        const {username, email, password} = data.newUser
        const checkUser = User.countDocuments({ email })
        if(checkUser > 0) throw new UserInputError("email already exists")
        const ePassword = await bcrypt.hash(password, 12)
        const user = new User({username, email, password: ePassword})
        await user.save()

        return {
            message: "user registered"
        }

    } catch (error) {
        return error
    }
}




const userList = async () => {
    try {
        
        const users = await User.find({}, { _id: 1, username: 1, email: 1 })
        console.log(users)

        return users

    } catch (error) {
        return error
    }
}





module.exports = {
    registerUser,
    userList
}