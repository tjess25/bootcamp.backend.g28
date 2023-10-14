const basic = require('./basic')
const servers = require('./servers')
const components = require('./components')
const urls = require('./urls')

module.exports = {
    swaggerDefinition: {
       ...basic,
       ...servers,
       ...components
    },
    apis: urls
}