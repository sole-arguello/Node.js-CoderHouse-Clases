import express from 'express';
import { connectDB } from './config/dbConection.js';

import { usersRouter } from './routes/users.routes.js';
import { studentsRouter } from './routes/students.routes.js';

const port = 8080;
const app = express();

//middlewares
app.use(express.json());

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})

//coneccion a la base de datos
connectDB()

//routes
app.use('/api/users', usersRouter)
app.use('/api/students', studentsRouter)