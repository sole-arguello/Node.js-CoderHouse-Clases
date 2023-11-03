import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { engine } from 'express-handlebars';
import path from 'path';
import { __dirname } from "./utils.js";
import { connectDB } from "./config/configDB.js";
import { config } from './config/config.js';
import { viewsRouter } from './routes/views.routes.js';
import { sessionsRouter } from './routes/sessions.routes.js';

const port = 8080;
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//formulario

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})

connectDB()

//configuracion motor de plantillas
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

//configurar la session
app.use(session({
    store: MongoStore.create({
        ttl: 60,
        mongoUrl: config.mongo.url,
    }),
    secret: config.session.secret_key,
    resave: true,
    saveUninitialized: true
}))

//rutas
app.use(viewsRouter)
app.use('/api/sessions', sessionsRouter)