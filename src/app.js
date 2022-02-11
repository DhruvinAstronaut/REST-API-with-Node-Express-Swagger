const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require("swagger-ui-express");
const db = require('./db/conn')
const Student = require('./models/userModel')
const userRouter = require('./routers/userRouter')
const port = 4000

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Student API",
        version: "1.0.0",
        description: "A simple Express Library API",
        contact: {
          name: "API Support"
        }
      },
      servers: [
        {
          url: "http://localhost:4000",
          description: "My API Documentation"
        },
      ],
    },
    apis: ["./src/routers/userRouter.js"],
  };
  
  const specs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(userRouter)

app.listen(port, () => {
    console.log(`router is running on port no : ${port}`);
})
