require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const routes = require("./routes/index")
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const swaggerSpec = swaggerJsDoc(docs)
const db = require('./util/db')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


db.connect()

app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.use(routes)

app.listen(port, () => {
  console.log("Server listening in port " + port)  
})