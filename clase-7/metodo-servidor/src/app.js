import express from 'express';
const port = 8080;
const app = express();
app.use(express.json());

//routes

let users = [];

app.get('/api/users', (req, res) => {
    //send permite enviar informacion o responder cualquier tipo de informacion
    //json es mas especifico define que le voy a mandar
    //status es el codigo de respuesta que estamos entregando
    res.status(200).json({data: users});
})

app.post('/api/users', (req, res) => {
    //en el body(posman o thunder) se puede mandar cualquier tipo de informacion
    const newUser = req.body
    console.log(newUser);
    users.push(newUser);
    res.status(201).json({message: 'Usuario Creado'})
})

app.put('/api/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const newInfo = req.body;
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex >= 0) {
        const newUsers = [...users];
        users[userIndex] = newInfo;
        res.status(200).json({message: 'Usuario Actualizado'})
    } else {
        res.status(404).json({message: 'Usuario no encontrado'})
    }
})

app.delete('/api/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex >= 0) {
        const newUsers = users.filter(user => user.id !== userId);
        users = newUsers;
        //const newUsers = [...users];
        //newUsers.splice(userIndex, 1);
        res.status(200).json({message: 'Usuario Eliminado'})
    } else {
        res.status(404).json({message: 'Usuario no encontrado'})
    }
})

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})