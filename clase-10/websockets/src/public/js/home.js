console.log('archivo js para la vista home');//js del lado del front
//creo el socket del lado del cliente
const socketClient = io()
//emitir msg del cliente al servidor
socketClient.emit('clientMessage', 'Primer mensaje desde el cliente con websockets')

socketClient.on('serverMessage', (data) => {
    console.log('data desde el servidor:', data);
})

socketClient.on('msgAllFormServer', (data) => {
    console.log('data egeneral desde el servidor:', data);
})
