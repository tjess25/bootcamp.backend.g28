const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    //const { isAdmin, msg }  = req.body
    const isAdmin = req.body.isAdmin
    const msg = req.body.msg
    console.log(isAdmin);
    console.log("msg", msg);
    if (isAdmin) {
        next()
    } else {
        res.status(403).send({
            msg: "User not admin",
        })
    }    
})

router.get('/', (req, res) => {
    res.status(200).send('users')
})


router.post('/', (req, res) => {
    res.status(200).send('users')
})

module.exports = router;