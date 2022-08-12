const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    }
})

// We can also make our own static methods for each model.
// Static Signup Method
userSchema.statics.signup = async function(email, password) {
    //validation
    if(!email || !password){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password must have at least one digit, one uppercase letter, and one special character. ')
    }

    //Check if email is already in database
    const exists = await this.findOne({email})
    if(exists) {
        throw Error('Email already exists.')
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({
        email, password: hash
    })

    return user;
} 

userSchema.statics.login = async function(email, password) {
    // Either one are empty
    if(!email || !password){
        throw Error("All fields must be filled")
    }

    //Check if email is already in database
    const user = await this.findOne({email})
    if(!user) {
        throw Error('Incorrect email ')
    }

    // Compare both passwords
    const match = await bcrypt.compare(password, user.password)
    if (!match){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)