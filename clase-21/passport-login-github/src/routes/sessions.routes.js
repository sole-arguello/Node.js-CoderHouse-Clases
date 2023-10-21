import { Router } from "express";
import passport from "passport";


//gestionar las sessiones
const router = Router();

router.post('/signUp', passport.authenticate('singUpLocalStrategy', {
    failureRedirect: '/api/sessions/fail-signup'}), async(req, res) => {

        res.render('loginViews', {message: 'Usuario Registrado correctamente'})
})

router.get('/fail-signup', (req, res) => {
    res.render('signUpViews', {error: 'No se pudo registrar el usuario'})
})

router.post('/login', passport.authenticate('loginLocalStrategy', {
    failureRedirect: 'api/sessions/fail-login',}),async(req, res) => {

        res.redirect('/profile')
})
router.get('/fail-login', (req, res) => {
    res.render('loginViews', {error: 'No se pudo iniciar sesion para este usuario'})
})

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