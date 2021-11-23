const usersController = require("../controllers/users.controller");

var express = require("express");

var router = express.Router();

router.post("/register", usersController.register);

/** Swagger Documentation
 * @swagger
 * /users/register:
 *   post:
 *      description: To register user.
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User Data
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - emailId
 *                 - password
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Danyaell
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Martínez
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: danos@sample.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/login", usersController.login);

/** Swagger Documentation
 * @swagger
 * /users/login:
 *   post:
 *      description: To login user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - emailId
 *                 - password
 *              properties:
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: danos@sample.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;