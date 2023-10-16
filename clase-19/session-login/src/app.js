import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { engine } from 'express-handlebars';
import path from 'path';
import { __dirname } from "./utils.js";
import { viewsRouter } from './routes/views.routes.js';

const port = 8080;
const app = express();

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})

//configuracion motor de plantillas
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

//configurar la session
app.use(session({
    store: MongoStore.create({
        ttl: 60,
        mongoUrl: 'mongodb+srv://soledadar:g04D4zMd9O4y2GvK@cluster0.njbseut.mongodb.net/primerLogin?retryWrites=true&w=majority'
    }),
    secret: 'claveSecretSession',
    resave: true,
    saveUninitialized: true
}))

//rutas
app.use(viewsRouter)