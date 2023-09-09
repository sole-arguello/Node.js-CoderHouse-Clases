import { Router } from "express";

const router = Router();

let pets = []

router.get('/', (req, res) => {
    res.json({data: pets})
})

router.post('/', (req, res) => {
    res.json({message: 'endpoints post pets'})
})

router.put('/:petsId', (req, res) => {
    res.json({message: 'endpoints put pets'})
})

router.delete('/:petsId', (req, res) => {
    res.json({message: 'endpoints delete pets'})
})
export {router as petsRouter}