import express from 'express'
import { engine } from 'express-handlebars'
import { __dirname } from './utils.js'
import path from 'path'
import { Server } from 'socket.io'

import { viewsRouter } from './routes/views.routes.js'

const app = express()
const port = 8080
//servidor expres con protocolo http
const httpServer = app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
//servidor socket con protocolo ws
const socketServer = new Server(httpServer)//vinculamos ambos, y configure websocket del lado del servidor

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

//configuracion de socket del lado del cliente
socketServer.on('connection', (socket) => {
    console.log('cliente conectado', socket.id)

    //recibir msg del cliente al servidor
    socket.on('clientMessage', (data) => {
        console.log('data desde el cliente:', data);
    })
    setTimeout(() => {
        socket.emit('serverMessage', 'canal abierto')
    },4000)

    setTimeout(() => {
        socketServer.emit('msgAllFormServer', 'nueva promocion')
    },8000)
})