console.log('javaScript en el frontend');
//socket del cliente
const socketClient = io();

const userName = document.getElementById('userName')
const inputMessage = document.getElementById('inputMessage')
const sendMsg = document.getElementById('sendMsg')

let user//variable para guardar el nombre del usuario
Swal.fire({
    title: 'chat',
    text: 'Por favor ingrese su nombre de usuario',
    input: 'text',
    inputValidator: (value) => {
        return !value && 'Debe ingresar el nombre de usuario para continuar'
    },
    allowOutsideClick: false,
    allowEscapeKey: false
}).then((inputValue) => {
    console.log(inputValue);
    user = inputValue.value
    userName.innerHTML = user
})


sendMsg.addEventListener('click', () => {
    //obtengo el user y el mensaje del input
    console.log({user: user, message: inputMessage.value});
    const msg = {user: user, message: inputMessage.value}
    //envio el mensaje al cliente por websocket al socket del servidor
    socketClient.emit('messageChat', msg)
})