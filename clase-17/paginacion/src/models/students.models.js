import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";


const studentsCollection = "students";

const studentsSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String
})
//aplico la pagincion
studentsSchema.plugin(mongoosePaginate);

export const studentsModel = mongoose.model(studentsCollection, studentsSchema);