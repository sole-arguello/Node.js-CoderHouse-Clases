import { error } from "console";
import { Router } from "express";
const router = Router();

router.post('/login', (req, res) => {
    console.log(req.session)
    const loginnForm = req.body
    req.session.email = loginnForm.email
    console.log(req.session)
    res.send('login exitoso')
})

router.get('/profile', (req, res) => {
    console.log(req.session)
    if(req.session.email){
        res.send(`bienvenido ${req.session.email}`)
    }else{
        res.send('No estas logueado, inicia sesion')
    }
    
})

router.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if(error) return res.send('No se pudo cerrar la sesion')
        res.send('logout exitoso')
    })
})

export { router as usersRouter}