const express = require('express')
const app = express()
const port = 3000
const apiRoutes = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*app.use((req, res, next) => {
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
})*/

app.get('/', (req, res) => {
    res.status(200).send('ok')
})

app.use(apiRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})