import passport from "passport";
import { config } from './config.js' 
import GithubStrategy from "passport-github2";

import localStrategy from "passport-local";
import { createHash, isValidPassword } from "../utils.js";

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


    //estrategia para login de usuarios local
    passport.use('loginLocalStrategy', new localStrategy(
        {
            usernameField: 'email',
        },
        async (username, password, done) => {
            try {
                const user = await usersModel.findOne({ email: username });
                //al revez del registro
                if (!user) {
                    return done(null, false);//usuario no esta registrado
                }
                if (!isValidPassword(password, user)) {
                    return done(null, false);//{ message: 'Credenciales invalidas' }
                }
                //si todo esta ok(null), creo la session del usuario(user)
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    ));

    //estrategia para login usuarios con github
    passport.use('singUpGithubStrategy', new GithubStrategy(
        //datos de la api
        {
            clientID: config.github.clientId,
            clientSecret: config.github.clientSecret,
            callbackURL: `http://localhost:8080/api/sessions${config.github.callbackUrl}`
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                //console.log('profile', profile)
                const user = await usersModel.findOne({email: profile.username})
                if(user){
                    return done(null, user)//creo la session
                }
                const newUser = {
                    first_name: profile._json.name,
                    email: profile.username,
                    password: createHash(profile.id),
                }
                console.log(newUser)
                const userCreated = await usersModel.create(newUser)
                return done(null, userCreated)
            } catch (error) {
                return done(error)
            }
        }
    ))

    //genero la sesion guardando el id
    passport.serializeUser((user, done)=>{
        done(null, user._id)//id de la base de datos
    })
    //cuando el usuario haga otra peticion(login) se consulta la info, se trae y se guarda en req.user
    passport.deserializeUser(async(id, done)=>{
        const user = await usersModel.findById(id)
        done(null, user)//queda guardado la info del ususario en una variable req.user
    })
}