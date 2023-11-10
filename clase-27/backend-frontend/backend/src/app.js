import express from 'express'
import cors from 'cors'

const port = 8080
const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(cors(
    {
        origin: 'http://127.0.0.1:5500',
    }
))

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})

const students = {
    first_name: 'Juan',
}