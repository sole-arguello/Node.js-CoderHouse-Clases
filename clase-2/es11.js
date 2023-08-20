console.log('--------- Nulish --------------')
const variable1 = null
const resultado = variable1 || 'valor por defecto'
console.log('resultado null', resultado)

let variable = 0// valores falsy
const resultadoSinNull = variable || 'valor vacio'
console.log('sin null:', resultadoSinNull)

const resultadoconNulish = variable ?? 'valor vacio'
console.log('con nulish', resultadoconNulish)

console.log('--- Variables privadas de las clases -----')

class Persona {
    #variablePrivada = 'soy una variable privada'
    constructor(nombre){
        this.nombre=nombre
    }
    // metodo para acceder a la variable privada 
    getVariableprivada(){
        return this.#variablePrivada
    }
    #metodoPrivado(){
        console.log('Soy un metodo privado')
    }
    //metodo publico accesible fuera de la clase
    saludar(){
        console.log('metodo publico: Hola')
    }
    metodoPublico(){

       console.log('metodo privado accedido desde el metodo publico:')
       this.#metodoPrivado()
    }
}

//instancio un objeto apartir de la clase
const pepito = new Persona('pepe')
console.log(pepito)
console.log('nombre:', pepito.nombre)

//console.log(pepito.#variablePrivada)//error
console.log('variable privada:', pepito.getVariableprivada())
//console.log(pepito.#metodoPrivado)//error
pepito.saludar()
pepito.metodoPublico()