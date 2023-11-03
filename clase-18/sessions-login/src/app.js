import express from 'express';
import cookieParser from 'cookie-parser';
import handlebars from 'express-handlebars';
import path from "path";
import { __dirname } from "./utils.js";

import session from 'express-session';
import { config } from './config/config.js';

import { viewsRouter } from './routes/views.routes.js';
import { usersRouter } from './routes/users.routes.js';

const port = 8080;
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cookies para el front
app.use(cookieParser(config.secret_key.cookie_key))
//session para el back
app.use(session({
    secret: config.secret_key.session_key ,
    resave: true,
    saveUninitialized: true
}))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

//routes
app.use(viewsRouter);
app.use('/api/users', usersRouter);
