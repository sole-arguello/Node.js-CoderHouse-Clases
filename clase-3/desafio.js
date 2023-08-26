/*
Calculadora positiva con promesas
Se crearan un conjunto de funciones gestionadas por promesas y un entorno ASINCRONO 
donde podremos ponerlas a prueba 

Definir funcion suma: 
    Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
    En caso de que algun sumando sea 0, rechazar la promesa indicando 'Operacion innecesaria'
    En caso de que la suma sea negativa, rechazar la promesa indicando 'la calculadora solo
    debe devolver valores positivos
*/
/*
definir funcion resta:
    Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0 
    En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando 'Operacion
    invalida'
    En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando 'La
    calculadora solo puede devolver valores positivos'
*/
/*
Definir una funcion multiplicacion:
    Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
    Si el producto es negativo, rechazar la oferta indicando "La calculadora solo puede devolver 
    valores positivos"
    Definir la misma funcion division utilizada en la clase
    Definir una funcion asincronica "calculos", hacer pruebas usando asinc / await y try/catch
*/

const sumar = (num1, num2) => {
    return new Promise( (resolve, reject) =>{
        if(num1 === 0 || num2 === 0){
            return reject('Operacion innecesaria')
        }
        if(num1<0 || num2<0){
            return reject('La calculadora solo debe ddevolver valores positivos')
        }
        setTimeout(() =>{
            resolve(num1+num2)
        }, 5000)
        
    })
}

const restar = (num1,num2) =>{
    return new Promise ((resolve, reject) => {
        if(num1 === 0 || num2 === 0){
            return reject('Operacion invalida')
        }

        if(num1<0 || num2<0){
            return reject('La calculadora solo debe ddevolver valores positivos')
        }
        setTimeout(() =>{
            resolve(num1-num2)
        }, 4000)
    })
}


const multiplicar = (num1, num2) =>{
    return new Promise((resolve, reject) =>{
        if(num1<0 || num2<0){
            return reject('La calculadora solo debe ddevolver valores positivos')  
        }
        setTimeout(() =>{
            return(num1*num2)
        }, 3000)
    })
}

const dividir = (num1, num2) =>{

}
const calculos = async() =>{
    try{
        const suma1 = await sumar(5,0)
        console.log(`El resultado de la suma es ${suma1}`)//reject
        const suma2 = await sumar(5,-9)
        console.log(`El resultado de la suma es ${suma2}`)//reject
        const suma3 = await sumar(5,9)
        console.log(`El resultado de la suma es ${suma3}`)//resolve


        const multiplicacion1 = await multiplicar(10,suma3)
        console.log(`El resultado de la multiplicacion es: ${multiplicacion1}`)//resolve

        //respuesta sincrona
        const resultadoFinal = multiplicacion1/5
        console.log(`El resultado final es: ${resultadoFinal}`)

        
    } catch (error) {
        console.error(`Hubo un error: ${error}`)//devuelve los reject
    }
}
calculos()





