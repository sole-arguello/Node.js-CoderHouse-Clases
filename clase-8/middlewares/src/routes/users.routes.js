import { Router } from "express";

const router = Router();

let users = []

router.get('/', (req, res) => {
    res.json({data: users})
})

router.post('/', (req, res) => {
    res.json({message: 'endpoints post users'})
})

router.put('/:usersId', (req, res) => {
    res.json({message: 'endpoints put users'})
})

router.delete('/:usersId', (req, res) => {
    res.json({message: 'endpoints delete users'})
})

export {router as usersRouter} 