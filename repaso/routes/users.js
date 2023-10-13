const express = require("express");
const router = express.Router();
const userController = require('../controllers/users')

/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: update a user by id
 *      tags:
 *          - users
 *      description: update a user by id
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *                              example: 2
 *                          first_name:
 *                              type: string
 *                              example: Bettye
 *                          last_name:
 *                              type: string
 *                              example: Rollin
 *                          email:
 *                              type: string
 *                              example: mail@mail.com
 *                          gender:
 *                              type: string
 *                              example: Female
 *                          password:
 *                              type: string
 *                              example: fZ3<GcSf55%2rMT
 *      responses:
 *          200:
 *              description: user data in json and status message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: number
 *                                          example: 2
 *                                      first_name:
 *                                          type: string
 *                                          example: Bettye
 *                                      last_name:
 *                                          type: string
 *                                          example: Rollin
 *                                      email:
 *                                          type: string
 *                                          example: mail@mail.com
 *                                      gender:
 *                                          type: string
 *                                          example: Female
 *                                      password:
 *                                          type: string
 *                                          example: fZ3<GcSf55%2rMT
 *                              msg:
 *                                  type: string
 *                                  example: "update success"
 *          404:
 *              description: not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: users db not found
 *                              error:
 *                                  type: string
 *                                  example: message error
 *          403:
 *              description: not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: users db not found
 *                              error:
 *                                  type: string
 *                                  example: message error
 */
//router.put('/:id', userController.put)

/**
 * @swagger
 * /users:
 *  get:
 *      summary: get a user by id
 *      tags:
 *          - users
 *      description: get a user by id
 *      responses:
 *          200:
 *              description: user data in json and status message
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: string
 *                                              example: "nwie78whjb"
 *                              msg:
 *                                  type: string
 *                                  example: "success"
 *          404:
 *              description: not found
 */
router.get('/', userController.get)
router.get('/:id', userController.getById)

/**
 * @swagger
 * /users:
 *  post:
 *      summary: create new user
 *      tags:
 *          - users
 *      description: endpoint to create a user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          firstName:
 *                              type: string
 *                              example: Name
 *                          lastName:
 *                              type: string
 *                              example: lastName
 *                          email:
 *                              type: string
 *                              example: email@mail.com
 *                          gender:
 *                              type: string
 *                              example: Male
 *                          password:
 *                              type: string
 *                              example: 87yhu67g49
 *                          dateBirth:
 *                              type: date
 *                              example: 2002-03-15
 *      responses:
 *          201:
 *              descripton: return a message and data user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:
 *                                  type: string
 *                                  example: user created
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      _id:
 *                                          type: string
 *                                          example: 65274a33d295b771ca680f9b
 *                                      firstName:
 *                                          type: string
 *                                          example: Name
 *                                      lastName:
 *                                          type: string
 *                                          example: lastName
 *                                      email:
 *                                          type: string
 *                                          example: email@mail.com
 *                                      gender:
 *                                          type: string
 *                                          example: Male
 *                                      password:
 *                                          type: string
 *                                          example: 87yhu67g49
 *                                      dateBirth:
 *                                          type: date
 *                                          example: 15/03/2000
 * 
 *
 */
router.post('/', userController.post)

router.post('/login', userController.login)

module.exports = router