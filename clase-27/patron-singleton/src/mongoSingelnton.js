import mongoose from "mongoose";

export class MongoSinglenton{

    static #instance;
    constructor(){ }

    static #connectDB(){
        const connection = mongoose.createConnection('mongodb+srv://soledadar:g04D4zMd9O4y2GvK@cluster0.njbseut.mongodb.net/primerLogin?retryWrites=true&w=majority')
        console.log("conectado")
        return connection
    }

    static getInstance(){
        if(this.#instance){
            console.log('base de datos conectada')
            return this.#instance
        }else{
            this.#instance = this.#connectDB();
            return this.#instance
        }
        
    }
}