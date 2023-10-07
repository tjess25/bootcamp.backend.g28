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
 *          201:
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
router.put('/:id', userController.put)

module.exports = router