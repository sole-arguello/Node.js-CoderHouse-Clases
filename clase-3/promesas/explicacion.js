//crear una funcion que retorne una promesa

const { rejects } = require("assert")
const { error } = require("console")

//  4/8 --> dividiendo = 4 , divisor = 8
const dividir = (dividiendo, divisor) =>{
    return new Promise( (resolve, reject) => {
        if(divisor === 0){
            //rechazar la operacion, porque no se posible dividir por 0
            reject('No es posible dividir por 0')
        }else{
            //poder cumplir la promesa, hacer la division
            resolve(dividiendo/divisor)
        }
    })
}

dividir(10,2)
.then((resultado) => {
    console.log(resultado)
})
.catch((error) => {
    console.log(error)
})

//caso rechazado
dividir(10,0)
.then((resultado) =>{
    console.log(resultado)
})
.then((error) =>{
    console.log(error)
})