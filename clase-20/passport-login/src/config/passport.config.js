import passport from "passport";

import localStrategy from "passport-local";
import { createHash, inValidPassword } from "../utils.js";

import { usersModel } from "../persistence/mongo/managers/models/users.models.js"


export const initializePassport = () => {
    //estrategia para registrar los usuarios(primer parametro es un nombre de
    //estrategia que yo le quiera poner y el segundo la estrategia
    passport.use('singUpLocalStrategy', new localStrategy(
        {
            //me permite trabajar con los datos del usuario
            passReqToCallback: true,
            usernameField: 'email',//username ahora es igual email
        },
        async(req, username, password, done) =>{

            const {first_name} = req.body
            try {
                const user = await usersModel.findOne({email: username})
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
                const userCreated = await usersModel.create(newUser)
                return done(null, userCreated)
            } catch (error) {
                return done(error)
            }
        }
    
    ))


    passport.serializeUser((user, done)=>{
        done(null, user._id)//id de la base de datos
    })

    passport.deserializeUser(async(id, done)=>{
        const user = await usersModel.findById(id)
        done(null, user)//queda guardado la info del ususario en una variable req.user
    })
}