import {Router } from 'express';
import { usersModel } from '../models/users.model.js';

const router = Router();

router.get('/', async (req, res) => {

    try {
        const users = await usersModel.find()// find es de mongoose no de js
        res.json({ status: 'success', message: 'listado de usuarios', data: users })
    } catch (error) {
        console.log(error.message)
        res.json({ status: 'error', message: 'No se pudo obtener los usuarios' })
    }
    //res.send({ status: 'success', message: 'listado de usuarios' });
})

router.post('/', async (req, res) => {
    try {
        const userInfo = req.body//informacion que recibo del frontend
        if(!userInfo) return res.json({ status: 'error', message: 'No se recibio informacion' })
        const userCreated = await usersModel.create(userInfo)
        res.json({ status: 'success', message: 'usuario creado', data: userCreated })
    } catch (error) {
        console.log(error.message)
        res.json({ status: 'error', message: 'No se pudo crear el usuario' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const userInfo = req.body
        if(!userInfo) return res.json({ status: 'error', message: 'No se recibio informacion' })
        const userUpdated = await usersModel.updateOne({_id: id}, userInfo)
        res.json({ status: 'success', message: 'usuario actualizado', data: userUpdated })
    } catch (error) {
        console.log(error.message)
        res.json({ status: 'error', message: 'No se pudo actualizar el usuario' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const userDeleted = await usersModel.deleteOne({_id: id})
        res.json({ status: 'success', message: 'usuario eliminado', data: userDeleted })
    } catch (error) {
        console.log(error.message)
        res.json({ status: 'error', message: 'No se pudo eliminar el usuario' })
    }
})


export {router as usersRouter}