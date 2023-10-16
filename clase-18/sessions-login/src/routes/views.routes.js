import { Router } from "express";

const router = Router();

//todas la rutas para vistas son con metodo get
router.get('/', (req, res) => {
    res.render('home')
})


export { router as viewsRouter}