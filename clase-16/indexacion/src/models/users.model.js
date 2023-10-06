import mongoose from "mongoose";

const  usersCollection = "users";

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email:{
        type: String,
        index: true,//se crea un indice para hacer por este campo en especifico la busqueda mas rapida
    },
    gender: String,
})

export const usersModel = mongoose.model(usersCollection, userSchema);