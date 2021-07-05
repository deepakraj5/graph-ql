const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const registerUser = async (data) => {
    try {

        console.log(data.newUser)

        const {username, email, password} = data.newUser
        const checkUser = User.countDocuments({ email })
        if(checkUser > 0) return "email already exsits"
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

module.exports = {
    registerUser
}