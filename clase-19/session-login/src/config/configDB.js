import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb+srv://soledadar:g04D4zMd9O4y2GvK@cluster0.njbseut.mongodb.net/primerLogin?retryWrites=true&w=majority');
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(`error al conectar la base de datos: ${error.message}`);
    }
}