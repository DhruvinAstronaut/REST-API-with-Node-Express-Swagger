const mongoose = require('mongoose')
const validator = require('validator')
const {
    default: isEmail
} = require('validator/lib/isEmail')

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },

    lastName: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validate: {
            validator: (value) => {
                return isEmail(value)
            },
            message: "Email is invalid"
        }

    },

    phone: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true,
        unique: true
    },

    address: {
        type: String,
        required: true
    }
}) 

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;