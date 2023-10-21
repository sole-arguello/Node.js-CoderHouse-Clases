import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async() =>{
    try {
        //remplazo url por la variable de entorno
        await mongoose.connect(config.mongo.url);
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(`error al conectar la base de datos: ${error.message}`);
    }
}