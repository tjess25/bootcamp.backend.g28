const express = require('express')
const router = express.Router()
const userMiddleware = require('../middlewares/users')
const usersController = require('../controllers/users')

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: get a user by id
 *      tags:
 *          - users
 *      description: get a user by id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *      responses:
 *          200:
 *              description: user data in json and status message
 *              content:
 *                  applications/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: string
 *                                          example: "nwie78whjb"
 *                              msg:
 *                                  type: string
 *                                  example: "success"
 *          404:
 *              description: not found
 */
router.get('/:id', usersController.get)

/**
 * @swagger
 * /users/getAll:
 *  get:
 *      summary: get a user by id
 *      tags:
 *          - users
 *      description: get a user by id
 *      responses:
 *          200:
 *              description: user data in json and status message
 *              content:
 *                  applications/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: string
 *                                          example: "nwie78whjb"
 *                              msg:
 *                                  type: string
 *                                  example: "success"
 *          404:
 *              description: not found
 */
router.get('/getAll', usersController.getAll)

router.delete('/:id', [userMiddleware.itsMe, userMiddleware.isAdmin], usersController.delete)

//router.use(userMiddleware.itsMe)
router.use(userMiddleware.isAdmin)

router.post('/', usersController.post)
router.put('/:id', usersController.put)


module.exports = router;