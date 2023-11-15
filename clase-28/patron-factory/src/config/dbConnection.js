import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongo.url)
        console.log('DB connected')
    }catch (error) {
        console.log("hubo un error", error)
    }

}