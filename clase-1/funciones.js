let num1 = 1
let num2 = 2

let result = num1 + num2
console.log(result)// imprime 3


//no retorno
function sumar (num1, num2){
    let result = num1 + num2
    console.log(result)
}
//ejecuto la funcion
sumar(1,2)
sumar(12,3)

// de retorno
function restar(num1, num2){
    let resul = num1 - num2
    return resul
}
//debo guardar el resultado en una variable 
const res = restar(4,1)
console.log(res)

