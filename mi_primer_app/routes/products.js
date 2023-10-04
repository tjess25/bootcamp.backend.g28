const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('ok')
})

router.get('/hi', (req, res) => {
    res.send('Hi!')
})

router.post('/', (req, res) => {
    //console.log(req.body);
    res.status(201).send("POST")
})

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body)
    res.status(201).send("PUT")
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.status(200).send("DELETE")
})

module.exports = router;