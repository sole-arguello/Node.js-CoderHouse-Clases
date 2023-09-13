import { Router } from "express";

const router = Router();

let users = []

//middleware de router
router.use(function(req, res, next) {
    console.log('peticion de router users recibida');
    console.log(req);
    next()
})

router.get('/', (req, res) => {
    console.log('Ruta get users');
    res.json({data: users})
})

router.post('/', (req, res) => {
    console.log('Ruta post users');
    res.json({message: 'endpoints post users'})
})

router.put('/:usersId', (req, res) => {
    res.json({message: 'endpoints put users'})
})

router.delete('/:usersId', (req, res) => {
    res.json({message: 'endpoints delete users'})
})

export {router as usersRouter} 