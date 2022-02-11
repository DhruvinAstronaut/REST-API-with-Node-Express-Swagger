const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/students-api`)
    .then(()=>console.log(`MongoDB connected to successfully`))
    .catch((error)=> console.log(`MongoDB did't connected to DB`, error));