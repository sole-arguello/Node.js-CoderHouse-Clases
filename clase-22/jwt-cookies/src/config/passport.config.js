import passport from 'passport'
import jwt from 'passport-jwt'
import { PRIVATE_KEY } from '../utils'

const JWTStrategy = jwt.Strategy
const extractJwt = jwt.ExtractJwt//extraer el token

export const initializePassport = () => {
    passport.use('jwtAuth', new JWTStrategy(
        { 
            jwtFromRequest: extractJwt.fromExtractors([cookieExtractor]),
            secretOrKey: PRIVATE_KEY,
            
        },
        async (jwtPayLoad, done) => {
            try {
                return done(null, jwtPayLoad)//re.user = info del token
            } catch (error) {
                return done(error)
            }
        }
    ))
}

const cookieExtractor = (req) => {
    let token
    if(req && req.cookies){
       token = req.cookies['cookieToken']
    }else{
        token = null
    }
    return token
}