console.log('javaScript en el frontend');
//socket del cliente
const socket = io();

const userName = document.getElementById('userName')
const inputMessage = document.getElementById('inputMessage')

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
    
