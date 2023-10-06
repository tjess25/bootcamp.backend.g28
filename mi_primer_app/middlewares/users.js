module.exports = {
    isAdmin: async (req, res, next) => {
        const { isAdmin, itsMe } = req.body
        console.log(req.body);
        if (isAdmin || itsMe) {
            next()
        } else {
            res.status(403).send({
                msg: "User not admin",
            })
        }
    },
    itsMe: async (req, res, next) => {
        const { itsMe } = req.body
        if (itsMe) {
            next()
        } else {
            req.body.itsMe = false
            next()
        }
    }
}