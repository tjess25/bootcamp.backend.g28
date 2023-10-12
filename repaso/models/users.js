/**
 * "first_name": "Thaine",
        "last_name": "Draper",
        "email": "tdraper0@bloglovin.com",
        "gender": "Male",
        "password": "nB1)gTXtpn9"
 */

const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    password: String,
    dateBirth: Date
})

const Users =  model('users', userSchema)
module.exports = Users


