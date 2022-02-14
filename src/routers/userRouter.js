const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/userController')
const Student = require('../models/userModel')

/**
 * @swagger
 * /checkApi:
 *  get:
 *      description: Use to check API is working 
 * 
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: Internal Server Error 
 */

userRouter.get("/checkApi", userController.checkApi);

/**
 * @swagger
 * /postStudentData:
 *  post:
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          firstName:
 *                              type: string
 *                              example: Dhruvin
 *                          lastName:
 *                              type: string
 *                              example: Khant
 *                          email:
 *                              type: string
 *                              example: dhruvinkhant@gmail.com
 *                          phone:
 *                              type: string
 *                              example: 8866813547
 *                          address:
 *                              type: string
 *                              example: Ahmedabad  ++
 *                          
 *      responses:
 *          '201':
 *              description: Student is successfully Register
 *          '404':
 *              description: Invalid Credentials
 *          '500':
 *              description: Internal Server Error
 */

userRouter.post("/postStudentData", userController.postStudentData);

/**
 * @swagger
 * /getStudentData:
 *  get:
 *      description: Use to request to get all students data
 *      responses:
 *          '200':
 *              description: Students Data Successfully Fetched
 *          '404':
 *              description: Invalid Credentials
 *          '500':
 *              description: Internal Server Error
 */
userRouter.get("/getStudentData", userController.getStudentData);

/**
 * @swagger
 * /getStudentDataById/{id}:
 *  get:
 *      description: Use to request to get studentdata by student's firstname
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *                      
 *      responses:
 *          '200':
 *              description: Students Data Successfully Fetched
 *          '404':
 *              description: Invalid Credentials
 *          '500':
 *              description: Internal Server Error
 */
userRouter.get("/getStudentDataById/:id", userController.getStudentDataById);

/**
 * @swagger
 * /putStudentDataById/{id}:
 *  put:
 *      description: Use to request to add student data
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          firstName:
 *                              type: string
 *                              example: Smit
 *                          lastName:
 *                              type: string
 *                              example: Sohagiya
 *                          email:
 *                              type: string
 *                              example: smitsohagiya@gmail.com
 *                          phone:
 *                              type: integer
 *                              example: 7894561230
 *                          address:
 *                              type: string
 *                              example: Surat
 *                          
 *      responses:
 *          '200':
 *              description: Student Data Successfully Updated
 *          '404':
 *              description: Invalid Credentials
 *          '500':
 *              description: Internal Server Error
 */
userRouter.put("/putStudentDataById/:id", userController.putStudentDataById);

/**
 * @swagger
 * /deleteStudentDataById/{id}:
 *  description: Use to request to delete student data
 *  delete:
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: string
 *      responses:
 *          '200':
 *              description: Student Data Successfully Deleted
 *          '404':
 *              description: Invalid Credentials
 *          '500':
 *              description: Internal Server Error
 */
userRouter.delete("/deleteStudentDataById/:id", userController.deleteStudentDataById);


/**
 * @swagger
 * /deleteStudentData:
 *  description: Use to request to delete student data
 *  delete:
 *      responses:
 *          '200':
 *              description: All Student Data has been Successfully Deleted
 *          '404':
 *              description: Invalid Credentials
 *          '500':
 *              description: Internal Server Error
 */

userRouter.delete("/deleteStudentData",userController.deleteStudentData)

module.exports = userRouter;