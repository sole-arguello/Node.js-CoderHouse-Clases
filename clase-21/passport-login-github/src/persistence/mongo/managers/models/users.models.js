import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    first_name: String,
    email: String,
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    }

})

export const usersModel = mongoose.model(userCollection, userSchema);