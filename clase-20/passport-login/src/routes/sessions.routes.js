import { Router } from "express";
import passport from "passport";


//gestionar las sessiones
const router = Router();

router.post('/signUp', passport.authenticate('singUpLocalStrategy', {
    failureRedirect: '/api/session/fail signup'}), async(req, res) => {

        res.render('loginViews', {message: 'Usuario Registrado correctamente'})
})

router.get('/fail signup', (req, res) => {
    res.render('signUpViews', {error: 'No se pudo registrar el usuario'})
})

// router.post('/login', async(req, res) => {
//     try {
//         const loginForm = req.body
//         const user = await usersModel.findOne({email: loginForm.email})
//         if(!user){
//             return res.render('loginViews', {error: 'Usuario no registrado'})
//         }
//         //verificar contraseña 1.10
//         if(isValidPassword(loginForm.password, user)){
//             return res.render('loginViews', {error: 'Credenciales invalidas'})
//         }

//         //si todo esta ok, creo la session del usuario
//         req.session.email = user.email
//         res.redirect('/profile')
        
//     } catch (error) {
//         res.render ('loginViews', {error: 'No se pudo iniciar sesion para este usuario'})
//     }
// })
//cerrar sesion
router.get('/logout', (req, res) => {
    try {
        req.session.destroy(err => {
            if(err ) return res.render('profileViews', {error: 'No se pudo cerrar la sesion'})
            res.redirect('/')
        })
    } catch (error) {
        
    }
})

export { router as sessionsRouter };