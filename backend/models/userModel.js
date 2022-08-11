const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


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

module.exports = mongoose.model('User', userSchema)