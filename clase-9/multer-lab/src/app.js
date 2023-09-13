import express from 'express'

import { usersRouter } from './routes/users.routes.js'
import { petsRouter } from './routes/pets.routes.js'


const port = 8080
const app = express()

//carpeta public
app.use(express.static('public'))
//atravez de use(middleware express.json())
app.use(express.json())//de aplicacion
app.use(express.urlencoded({extended: true}))//para formularios y poder capturar los datos

app.use("/api/users", usersRouter)
app.use("/api/pets", petsRouter)


app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})