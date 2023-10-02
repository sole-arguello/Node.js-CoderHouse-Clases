import mongoose from "mongoose";

const studentsCollection = "students";


const studentSchemas = new mongoose.Schema({
    first_name: { 
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    age: {
        type: Number,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    curse: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
})

export const studentsModel = mongoose.model(studentsCollection, studentSchemas)