import { Router } from "express";

const router = Router();

let pets = []

router.get('/', (req, res) => {
    res.json({data: pets})
})

router.post('/', (req, res) => {
    const petInfo = req.body
    console.log("petsInfo", petInfo);
    res.send('Peticion resibida')
})


export {router as petsRouter}