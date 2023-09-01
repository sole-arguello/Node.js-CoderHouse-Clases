import express from 'express'

const port = 8080

const app = express()

app.get('/miRuta', (req, res) => {
    res.send('Peticion Recibida')
})

app.get('/miRuta2', (req, res) => {
    res.send('<h1 style="color:blue">respuesta con HTML</h1>')
})

app.get('/miRuta3', (req, res) => {
    res.send({name: 'Juan', age: 25})
})
/*----------------------------------------------------- */
app.get('/user', (req, res) => {
    res.send({name: 'Juan', age: 25})
})

const users = [
    {id:1, name: 'Juan', age: 25, gender: 'masculino'},
    {id:2, name: 'Pedro', age: 30, gender: 'masculino'},
    {id:3, name: 'Maria', age: 35, gender: 'femenino'}
]

//users?gender=femenino&age=35
app.get('/users', (req, res) => {
    console.log(req.query);
    const gender = req.query.gender
    if(gender){
        const resul = users.filter(user => user.gender == gender)
        res.send(resul)
    }else{
        res.send(users)
    }
})

//   

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id == id)
    if(user){
        res.send(user)
    }else{
        res.send('No existe el usuario')        
    }
})
/**----------------------------------------------------------- */
app.get('/users', (req, res) => {
    console.log(req.query);
    res.send(users)
})
app.listen(port, () => {
    console.log(`servidor escuchando en el puerto ${port}`)
})