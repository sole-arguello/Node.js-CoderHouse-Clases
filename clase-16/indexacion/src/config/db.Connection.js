import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://soledadar:g04D4zMd9O4y2GvK@cluster0.njbseut.mongodb.net/usersDB?retryWrites=true&w=majority', {
            
        })
    } catch (error) {
        console.error(`Hubo un error al conectar la base de datos ${error.message}`);
    }
}