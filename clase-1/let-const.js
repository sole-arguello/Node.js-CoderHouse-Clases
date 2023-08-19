//var es una variable de reasignacion y redeclaracion y puede ser accedida fuera o dentro del bloque

var nombre = 'pedro'

if(true){
    var nombre = 'juan'
}

console.log(nombre) // imprime juan

//let es de reasignacion pero puede ser accedida segune l contexto
//contexto puede ser global(fuera del bloque), local(dentro del bloque)
let nombre1 = 'pedro2'
let numero;
if(true){
    let nombre1 = 'juan2'
    console.log(nombre1)//imprime juan
    let edad = 20
    let precio = 12.3
    if(true){
        console.log(precio)//imprime 12.3, puede ser accedida por un bloque inferior
    }
}
console.log(nombre1)//imprime pedro
console.log(edad)//la referencia como no esta definida
console.log(numero)//undefiend

//const no puede ser reasignada su valor siempre es constante
let city = 'Bs As'
city = 'Bogota'
console.log(city)
const curso = 'Js'
curso = 'html'
console.log(curso)//al ejecutar da error porque no puede ser reasignada