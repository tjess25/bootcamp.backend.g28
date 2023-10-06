const express = require('express')
const router = express.Router()
const userMiddleware = require('../middlewares/users')
const usersController = require('../controllers/users')


router.get('/:id', usersController.get)
router.get('/getAll', usersController.getAll)

router.delete('/:id', [userMiddleware.itsMe, userMiddleware.isAdmin], usersController.delete)

//router.use(userMiddleware.itsMe)
router.use(userMiddleware.isAdmin)

router.post('/', usersController.post)
router.put('/:id', usersController.put)


module.exports = router;