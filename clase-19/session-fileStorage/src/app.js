import express from "express";
import session from "express-session";
import FileStore from "session-file-store";
import path from "path";
import { __dirname } from "./utils.js";

const port = 8080;
const app = express();

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

//conecto ssesion FileStore
const fileStorage = FileStore(session)

//configuracion se session
app.use(session({
    store: new fileStorage({
        //ttl tiempo de vida de la session
        //retries numero de intentos del servidor de leer el archivo con la session
        //path ruta de la carpeta donde almacenamos las sesiones
        ttl: 60,
        retries: 0,
        path: path.join(__dirname, '/sessions'),
    }),
    secret: 'claveSecretSession',
    resave: true,
    saveUninitialized: true,

}))

//ruta para generar la session del usuario
app.get('/login', (req, res) => {
    const { name } = req.query
    req.session.user = name
    res.send('login y sesion creada en archivos')
})

app.get('/profile', (req, res) => {
    if(req.session.user){
        res.send(`Bienvenido => ${req.session.user}`)
    }else{
        res.send('Debe iniciar sesion')
    }
})