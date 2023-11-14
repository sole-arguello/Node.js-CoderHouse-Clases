import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://soledadar:g04D4zMd9O4y2GvK@cluster0.njbseut.mongodb.net/clase28?retryWrites=true&w=majority')
        console.log('DB connected')
    }catch (error) {
        console.log("hubo un error", error)
    }

}