import express from 'express';
import { toysRouter } from './routes/toys.routes.js';
import { usersRouter } from './routes/users.routes.js';

const port = 8080;
const app = express();



app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})
//middleware
app.use(express.json())
app.use('/api/toys', toysRouter)
app.use('/api/users', usersRouter)