const express = require('express')
const app = express()
const port = 3000
const apiRoutes = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send('ok')
})

app.use(apiRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})