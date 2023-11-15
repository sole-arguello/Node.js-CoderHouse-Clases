import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect()
        console.log('DB connected')
    }catch (error) {
        console.log("hubo un error", error)
    }

}