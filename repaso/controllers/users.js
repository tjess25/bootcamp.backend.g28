const fs = require('fs')
const Users = './db/users.json'

module.exports = {
    put: (req, res) => {
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
                res.status(201).send({msg: 'user updated', data: req.body});              
            });
        });   
    },
}