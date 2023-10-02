import mongoose from 'mongoose';

const usersCollection = 'users';//nombre de la coleccion

const userSchemas = new mongoose.Schema({
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
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        
    },
    // cursos: {
    //     type: [
    //         {
    //             type: String,
    //         }
    //     ]
    // }
})
//el modelo sirve para realizar operaciones sobre la coleccion users
export const usersModel = mongoose.model(usersCollection, userSchemas);