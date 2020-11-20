const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    employee_id: {
        type: Number,
        unique: true,
        required: true,
        trim: true
    },
    employee_name: {
        type: String,
        required: true,
        trim: true
    },
    employee_image: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
    }
    },
    {
        versionKey: false
    }
)

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee