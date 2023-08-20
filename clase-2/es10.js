console.log('------ Metodo trim() ----------')

const correoEspacio = '    nombre@gmail.com    '
console.log('Correo con espacios:', correoEspacio)

const correoSinEspacios = correoEspacio.trim()
console.log('Correo sin espacios:', correoSinEspacios)
if(correoSinEspacios === 'nombre@gmail.com'){
    console.log('Inicio de sesion')
}else{
    console.log('sesion fallida')
}

console.log('------- Metodo Flat() ------')
const numeros = [ [1,2,3], [4,5,6], [7,8,[9,10]] ]
console.log(numeros.flat(1))