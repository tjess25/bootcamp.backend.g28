const express = require('express')
const router = express.Router()
const userMiddleware = require('../middlewares/users')
const usersController = require('../controllers/users')


router.get('/', usersController.get)

//router.use(userMiddleware.isAdmin)
router.post('/', usersController.post)
router.put('/:id', usersController.put)
router.delete('/:id', [userMiddleware.isAdmin, userMiddleware.itsMe], usersController.delete)

module.exports = router;