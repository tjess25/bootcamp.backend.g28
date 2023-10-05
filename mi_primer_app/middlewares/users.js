module.exports = {
    isAdmin: async (req, res, next) => {
        const { isAdmin } = req.body
        if (isAdmin) {
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
            res.status(403).send({
                msg: "User not autorized",
            })
        }
    }
}