import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import { config } from './config/config.js';

const port = 8080;
const app = express();

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})

//configuracion session
app.use(session({
    //almacenamiento de mongo
    store: MongoStore.create({
        ttl: 60,
        mongoUrl: config.mongo.url,
    }),
    secret: 'claveSecretSession',
    resave: true,
    saveUninitialized: true,
}))


//rutas para generar la session del usuario
app.get('/login', (req, res) => {
    const { name } =  req.query;
    req.session.user = name;
    res.send('login y session creada correctamente');
})
//ruta del perfil
app.get('/profile', (req, res) => {
    if(req.session.user){
        res.send(`Bienvenido ${req.session.user}`);
    }else{
        res.send('No hay una session activa');
    }
})