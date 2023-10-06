import express from 'express';
import { connectDB } from './config/db.Connection.js';
import { usersModel } from './models/users.model.js';

const port = 8080;
const app = express();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
connectDB()

app.get('/', async (req, res) => {
    try {
        const rsult = await usersModel.find({email: 'kaudeniscn@prlog.org'}).explain('executionStats')
        res.json({status: 'success', data: rsult})
    } catch (error) {
        res.json({status: 'error', message: 'No se pudo hacer la consulta'})
    }
})