import mongoose from 'mongoose';
import { config } from '../config/config.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongo.url)
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.error(`Hubo un error al conectar la base de datos ${error.message}`);
    }
}