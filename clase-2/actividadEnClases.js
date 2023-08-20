/*
1) Realiza una lista nueva (array) que contenga todos los tipos de productos (no cantidades)
consejo: utiliza Object.keys y array.includes.
2)Mostar el array por consola
3)Postariormente, obetener el total de productos vendidos por todos los objetos (utilizar Object.value) 
*/

//array de productos
const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

//1)
const tienda1 = Object.keys(objetos[0])
const tienda2 = Object.keys(objetos[1])
console.log('tienda1:', tienda1)
console.log('tienda2:', tienda2)

//2)
const tienda = [...tienda1, ...tienda2]
console.log('tienda:', tienda)
console.log('---- Valores unicos metodo "Set()" --------')

const productos = new Set(tienda)
const productosUnicos = [...productos]
console.log('Productos unicos:', productosUnicos)

//3)

const values1 = Object.values(objetos[0])
const values2 = Object.values(objetos[1])
const values = [...values1, ...values2]
console.log('Valores:', values)// [3,2,1,5,2,1,1,6,1,4] = 31

const total =  values.reduce( (acc, curr) =>acc += curr, 0 )
console.log('Total productos:', total)// 31




