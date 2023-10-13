//const fs = require('fs')
//const Users = './db/users.json'
const Users = require('../models/users')
const auth = require('../middlewares/auth')

//db.users.find({})

module.exports = {
    get: async (req, res) => {
        let users = await Users.find()
        res.status(200).send({ msg: "success", data: users })
    },
    getById: async (req, res) => {
        let id = req.params.id
        let user = await Users.findOne({ _id: id })
        //let user = await Users.findById(id)
        //let user = await Users.findOne({first_name: id})
        res.status(200).send({ msg: "sucess", data: user })
    },
    post: async (req, res, next) => {
        try {
            req.body.password = await Users.encrypPassword(req.body.password)
            let user = await Users.create(req.body)
            if (!user) {
                res.status(502).send({ msg: "user not created", err: user })
            }
            await user.save()
            res.status(201).send({ msg: "user created", data: user })
        } catch (error) {
            next(error, req, res)           
            //res.status(500).send({msg: error})
        }

    },
    login: async (req, res) => {
        const { email, password } = req.body
        let user = await Users.findOne({ email: email })
        if (!user) {
            return res.status(404).send({ msg: "user not found" })
        }
        let validPass = await Users.comparePassword(password, user.password)
        if (!validPass) {
            return res.status(401).send({ msg: "Incorrect password" })
        }
        // generate token
        let token = auth.generateToken(user)
        return res.status(200).send({ msg: "success", data: token })
    }
    /*put: (req, res) => {
        let id = req.params.id

        fs.readFile(Users, 'utf8', (err, usersData) => {
            if (err) res.status(404).send({msg: 'users db not found', error: err});
            let users = JSON.parse(usersData)
            //let userById = users.find((u) => u.id == id)
            let newUsers = []
            users.forEach(user => {
                if (user.id != id) {
                    newUsers.push(user)
                } else {
                    newUsers.push(req.body)
                }               
            });
            fs.writeFile(Users, JSON.stringify(newUsers), (err) => {
                if (err) res.status(403).send({msg: 'user not updated', error: err});
                res.status(200).send({msg: 'user updated', data: req.body});              
            });
        });   
    },*/
}