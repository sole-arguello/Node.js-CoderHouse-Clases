import { Router } from 'express';
import { studentsModel } from '../models/estudents.model.js'

const router = Router();

router.get('/', async (req, res) => {

    try {
        const students = await studentsModel.find()// find es de mongoose no de js
        res.json({ status: 'success', message: 'listado de estudiantes', data: students })
    } catch (error) {
        console.log(error.message)
        res.json({ status: 'error', message: 'No se pudo obtener los estudiantes' })
    }
    //res.send({ status: 'success', message: 'listado de usuarios' });
})

const studentsArray = [
    {first_name: 'Juan', last_name: 'Perez', age: 20, dni: 12345672, curse: 'Backend', grade: 9},
    {first_name: 'Maria', last_name: 'Garcia', age: 20, dni: 12345679, curse: 'html', grade: 8},
    {first_name: 'Pedro', last_name: 'Garcia', age: 20, dni: 12345678, curse: 'css', grade: 7},

]

router.post('/', async (req, res) => {
    try {
        const result = await studentsModel.insertMany(studentsArray)
        res.json({ status: 'success', message: 'estudiantes guardados', data: result })
    } catch (error) {
        console.log(error.message)
        res.json({ status: 'error', message: 'No se pudo crear el usuario' })
    }
})



export {router as studentsRouter }