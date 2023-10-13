module.exports = {
    errorHandler: (err, req, res, next) => {
        switch (true) {
            case typeof err === 'string':
                const is404 = err.toLowerCase().endsWith('not found')
                const statusCode = is404 ? 404 : 401
                return res.status(statusCode).send({msg: is404})
            default:
                return res.status(err.status || 500).send({msg: err.message || 'Application Error'})
        }
    }
}