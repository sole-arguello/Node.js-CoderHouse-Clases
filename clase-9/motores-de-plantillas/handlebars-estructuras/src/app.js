import express from 'express'
import { engine } from 'express-handlebars'
import { __dirname } from './utils.js'
import path from 'path'

import { viewsRouter } from './routes/views.routes.js'

const app = express()
const port = 8080
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

//middlewares
app.use(express.static(path.join(__dirname, '/public')))

//configuracion del motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}))//defino la extension de los archivos
app.set('view engine', '.hbs')//defino el motor de plantillas
//app.set('views', './views')//defino la ubicacion de los archivos(carpetas)
app.set('views', path.join(__dirname, 'views'))//defino la ubicacion de los archivos(carpetas)

//routes
/*------------ Actividad en clases ------------------*/
//no hace referencia a la ruta, sino al router utilizando el path que ayamos creado
app.use(viewsRouter)

