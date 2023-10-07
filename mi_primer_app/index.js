require('dotenv').config()
const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const app = express()
const port = process.env.PORT
const apiRoutes = require('./routes/index')
const docs = require('./doc/index')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerSpec = swaggerJsDoc(docs)
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec))


app.get('/', (req, res) => {
    res.status(200).send('ok')
})

app.use(apiRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})