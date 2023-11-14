import mongoose from 'mongoose'

const constactscollection = 'contacts'

const constactschema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

export const contactsModel = mongoose.model(constactscollection, constactschema)