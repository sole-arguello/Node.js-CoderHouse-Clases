import express from 'express';
import { generateToken, validateToken } from './utils.js'

const port = 8080;
const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

app.get('/login', (req, res) => {
    //validar si el usuario existe o no en la db, que la constrasena sea correcta
    const user = req.body
    const token = generateToken(user)
    res.json({status: 'seccess', accessToken: token})
})

app.get('/profile', validateToken, (req, res) => {
    
    res.send('bienvenido')
})

//pronar ruta en postman