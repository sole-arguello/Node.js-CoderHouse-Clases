import { Router } from "express";
import { usersModel } from "../persistence/mongo/managers/models/users.models.js";

//gestionar las sessiones
const router = Router();

router.post('/signUp', async(req, res) => {
    try {
        const singUpForm = req.body
        const result = await usersModel.create(singUpForm)
        res.render('loginViews', {message: 'Usuario Registrado correctamente'})
    } catch (error) {
        res.render('signUpViews', {error: 'No se pudo registrar el usuario'})
    }
})

router.post('/login', async(req, res) => {
    try {
        const loginForm = req.body
        const user = await usersModel.findOne({email: loginForm.email})
        if(!user){
            return res.render('loginViews', {error: 'Usuario no registrado'})
        }
        //verificar contraseña
        if(user.password != loginForm.password){
            return res.render('loginViews', {error: 'Credenciales invalidas'})
        }

        //si todo esta ok
        req.session.email = user.email
        res.redirect('/profile')
        
    } catch (error) {
        res.render ('loginViews', {error: 'No se pudo iniciar sesion para este usuario'})
    }
})
//cerrar sesion
router.get('/logout', (req, res) => {
    try {
        req.session.destroy(err => {
            if(err ) return res.render('profileViews', {error: 'No se pudo cerrar la sesion'})
            res.redirect('/')
            // if(err){
            //     console.log(err)
            // }
            // res.redirect('/')
        })
    } catch (error) {
        
    }
})

export { router as sessionsRouter };