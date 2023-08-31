const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
    console.log('peticion recibida de un cliente');

    //respuesta del servidor al cliente 
    res.end('Su peticion fue recibida en el servidor')
})

server.listen(port, () => {
    console.log(`servidor escuchando en el puerto ${port}`)
})
