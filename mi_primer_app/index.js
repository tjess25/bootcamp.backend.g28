const express = require('express')
const app = express()
const port = 3000

//hi

app.use((req, res, next) => {
    console.log("Este es un middleware")
    next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('ok')
})

app.get('/hi', (req, res) => {
    res.send('Hi!')
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).send("POST")
})

app.put('/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body)
    res.status(201).send("PUT")
})

app.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.status(200).send("DELETE")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})