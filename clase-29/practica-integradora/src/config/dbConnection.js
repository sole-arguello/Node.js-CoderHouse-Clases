import { config } from './config.js';
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongo.url);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
}