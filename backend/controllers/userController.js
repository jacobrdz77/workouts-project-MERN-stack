//import model to manipulate data in database
const User = require('../models/userModel')

// Login User
const loginUser = async (req, res) => {
    res.status(200).json({msg: "log in user"})
}

// Signup User
const signupUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser, signupUser
}