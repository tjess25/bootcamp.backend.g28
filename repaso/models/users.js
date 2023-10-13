/**
 * "first_name": "Thaine",
        "last_name": "Draper",
        "email": "tdraper0@bloglovin.com",
        "gender": "Male",
        "password": "nB1)gTXtpn9"
 */

const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const uniqueValidatior = require('mongoose-unique-validator')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email invalid"] 
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female'],
            message: '{VALUE} is not a valid gender'
          }
    },
    password: {
        type: String,
        required: true
    },
    dateBirth: {
        type: Date
    }
},
{
   timestamps: true,
   statics: {
    encrypPassword: async (password) => {
        if (!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)) {
           throw new Error ("password not valid") 
        }
        const salt = await bcrypt.genSalt(15)
        return await bcrypt.hash(password, salt)
    },
    comparePassword: async (password, hash) => {
        return await bcrypt.compare(password, hash)
    }
   }
}
)
userSchema.plugin(uniqueValidatior)
const Users =  model('users', userSchema)
module.exports = Users


