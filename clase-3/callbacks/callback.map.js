const numeros = [1,2,3,4]

//map
const nuevoArreglo1 = numeros.map( (numero) => numero + 1) // output: [2,3,4,5]
console.log('Nuevo Arreglo:', nuevoArreglo1)

//callback
const sumar = (num) => num +1
const nuevoArreglo2 = numeros.map(elem => sumar(elem))
console.log('Resultado callback:', nuevoArreglo2)
//sin callback
const nuevoArreglo3 = numeros.map(numero => numero *2) // [2,4,6,8]
console.log("Arrglo 3:", nuevoArreglo3)