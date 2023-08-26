//Declarada o definida

function nombreFuncion(param1, param2){
    const resultado = param1 + param2
    return resultado
}
nombreFuncion(5,8)
//Expresas

const variable = function(param1,param2){
    const resultado = param1 + param2
    return resultado
}
variable(5,6)

//Expresadas Arrow function

const funcionFlecha1 = (param1, param2) => {
    const resultado = param1 + param2
    return resultado
}

const funcionFlecha2 = (param1,param2) => param1 + param2

const funcionFlecha3 = param1 => param1 * 2


//Anonimas 
const numeros = [1,2,3,4]
numeros.forEach( elem => console.log(`Elem: ${elem}`) )