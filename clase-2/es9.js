console.log('--------- Deastructuring Objetos ----------')
const userPepe = {
    name:'pepe',
    lasName: 'perez',
    age: 20,
    city: 'Miami'
}
console.table(userPepe)
console.log('----- antes variable = objeto.propiedad  -----')
const cityPepe = userPepe.city// tambien -> userPepe['city']
const agePepe = userPepe.age
console.log('age:', agePepe)
console.log('city', cityPepe)

console.log('----- ahora {propiedaes} = objeto -----')
const {age, city} = userPepe
console.log('age:', age)
console.log('city:', city)

console.log('--------- Spread operator ...Objeto --------')
const pepeData={
    //antes
    // name: userPepe.name,
    // age: userPepe.age,
    //ahora
    ...userPepe,// trae una copia de las propiedades 
    course:'JS',
    level:'Intermedio',
    grade:4.5
}
console.log('papedata:', pepeData)

console.log('--------- Spread operator ...array --------')


const arreglo1 = [1,2,3]
const arreglo2 = arreglo1
arreglo2.push(4)
console.log("Por referencia - arreglo1: ", arreglo1)//ambos van a ser afectados
console.log("Por referencia - arreglo2: ", arreglo2)

const A = [1,2,3]
const B = [...A]
B.push(4)
console.log('Por valor - A:', A)
console.log('Por valor - B:', B)

const numerosA = [1,2,3,4]
const numerosB = [5,6,7,8]
const arregloCompleto = [...numerosA, ...numerosB, 10,11,12,34 ]//un nuevo arreglo con ambos valores
console.log('A:',numerosA)
console.log('B',numerosB)
console.log('A + B + otros valores', arregloCompleto)

console.log('----------- Rest operator -----------------')

function sumar(num1, num2, ...rest){
    console.log('rest', rest)

}

sumar(1,2,3,5,9,6,7,78)