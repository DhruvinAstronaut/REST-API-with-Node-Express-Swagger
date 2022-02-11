const Student = require("../models/userModel")

module.exports = {
    checkApi: (req, res) => {
        try {
            return res.send({
                responseCode: 200,
                responseMessage: "Api is working"
            });
        } catch (error) {
            return res.send({
                responseCode: 500,
                responseMessage: "Server Error ....",
                responseResult: error.message
            });
        }
    },
    postStudentData : async(req,res)=> {
        try {
            const user = new Student(req.body);
            const createUser = await user.save()
            res.status(201).send(createUser);
        } catch (err) {
            res.status(400).send(err)
        }
    },
    getStudentData : async(req, res)=> {
        try {
            const studentsData = await Student.find()
            res.send(studentsData)
    
        } catch (err) {
            res.status(400).send(err)
        }
    },
    getStudentDataById : async(req, res) => {
        try {
            const studentsData = await Student.findOne({id :req.params.id })
    
            if (!studentsData) {
                return res.status(404).send("Invalid data")
            } else {
                // console.log(studentsData);
                // console.log(studentsData._id.getTimestamp());
                res.send(studentsData)
            }
        } catch (err) {
            res.status(404).send(err)
        }
    },
    putStudentDataById : async (req, res) => {
        try {
            const id = req.params.id
            const updateStudentData = await Student.findByIdAndUpdate(id, req.body, {
                new: true
            })
    
            if (!updateStudentData) {
                return res.status(404).send("Invalid data")
            } else {
                res.send(updateStudentData)
            }
        } catch (err) {
            res.status(400).send(err)
        }
    },
    deleteStudentDataById : async (req, res) => {
        try {
            const id = req.params.id
            const deleteStudentsData = await Student.findByIdAndDelete(id)
    
            if (!deleteStudentsData) {
                return res.status(404).send("Invalid data")
            } else {
                res.send(deleteStudentsData)
            }
        } catch (err) {
            res.status(400).send(err)
        }
    },
    deleteStudentData : async (req, res) => {
        try {
            const deleteStudentsData = await Student.remove()
    
            if (!deleteStudentsData) {
                return res.status(404).send("Invalid data")
            } else {
                res.send(deleteStudentsData)
            }
        } catch (err) {
            res.status(400).send(err)
        }
    }

}