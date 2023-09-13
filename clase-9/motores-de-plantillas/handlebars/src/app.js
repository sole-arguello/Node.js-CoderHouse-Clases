import express from 'express'
import { engine } from 'express-handlebars'
import { __dirname } from './utils.js'
import path from 'path'

const app = express()
const port = 8080
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

//configuracion del motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}))//defino la extension de los archivos
app.set('view engine', '.hbs')//defino el motor de plantillas
//app.set('views', './views')//defino la ubicacion de los archivos(carpetas)
app.set('views', path.join(__dirname, 'views'))//defino la ubicacion de los archivos(carpetas)

//routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})