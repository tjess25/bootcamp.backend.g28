const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    generateToken: (user) => {
        delete user.password
        return jwt.sign({user: user}, JWT_SECRET, {expiresIn: 86400})
    }
}