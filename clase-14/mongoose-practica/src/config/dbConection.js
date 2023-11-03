import mongoose from 'mongoose';
import { config } from '../config/config.js';


export const connectDB = async () => {
    try {
        const url = config.mongo.url
        await mongoose.connect(url)
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log( `Hubo un error al conentar la BD ${error.message}`); 
    }
}