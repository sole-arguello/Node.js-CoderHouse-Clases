import passport from "passport";

import localStrategy from "passport-local";
import { createHash, isValidPassword } from "../utils.js";

import {userModel } from "../persistence/mongo/managers/models.js"


export const initializePassport = () => {
    //estrategia para registrar los usuarios(primer parametro es un nombre de
    //estrategia que yo le quiera poner y el segundo la estrategia
    passport.use('signUpLocalEstrat', new localStrategy(
        {
            //me permite trabajar con los datos del usuario
            passReqCallback: true,
            usernameField: 'email',//username ahora es igual email
        },
        async(req, username, password, done) =>{

            const {first_name} = req.body
            try {
                const user = await userModel.findOne({email: username})
                if(user){//null: que no hubo error, false: que no existe.
                    return done(null, false, {message: 'El usuario ya registrado'})
                }

                //creo el usuario
                const newUser = {
                    first_name,
                    email: username,
                    password: createHash(password),
                    role: 'user'
                }
                console.log(newUser)
                //creo un nuevo objeto
                const userCreated = await userModel.create(newUser)
                return done(null, userCreated)
            } catch (error) {
                done(error)
            }
        }
    
    ))
}