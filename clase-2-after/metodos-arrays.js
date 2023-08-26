// map
const numeros = [ 1,2,3,4 ]

const numerosDuplicados = numeros.map( elem => elem * 2 )
console.log('numeros', numeros)
console.log('duplicados ',numerosDuplicados)

const user = [
    {name: 'pepe', age: 20}, {name:'ana', age:24}, {name: 'juan', age:30}
]
const usersNames = user.map( (elem) => elem.name )
console.log('Nombre de Usuarios:', usersNames)
const userNames2 = user.map ( elem => { return { nombe: elem.name}})
console.log('Usuarios 2:', userNames2)

//find

const alumnos = [ { name: 'Ana', promedio: 10 }, { name: 'Luis', promedio: 7 }, { name: 'Ana', promedio: 8 } ]
const op1 = alumnos.find( elem => elem.name === 'Ana') // Ana, 10
const op2 = alumnos.find( elem => elem.name === 'ana') //undefiend
const op3 = alumnos.find( elem => elem.name === 'ana') || 'No se encontro' // No se encontro
console.log('nombre:', op1)
console.log('nombre:', op2)
console.log('nombre:', op3)

//filter

const productos = [ {prod: 'harina', precio: 20 },
                    {prod: 'papa', precio: 30}, 
                    {prod: 'azucar', precio: 45}, 
                    {prod: 'banana', precio: 80},
                    {prod: 'hariana', precio: 35}
                ]

const prod = productos.filter(elem => elem.prod === 'hariana')
console.log('Producto hariana:', prod)// [ {prod: 'harina', precio: 20 }, {prod: 'hariana', precio: 35} ]

//includes
const todosConN = productos.filter( elem => elem.name.includes('n'))
console.log('Todos los nombre con n:', todosConN) //[ {prod: 'harina', precio: 20 }, 
                                                  //{prod: 'hariana', precio: 35} 
                                                  // {prod: 'banana', precio: 80} ]
//reduce 
const arreglo = [1,2,3,4,5]
let total = 0//valor inicial
for(let i=0; i<arreglo.length;i++){
    total+= arreglo[i]//operacion
}
console.log(total)
//acc= total / curr= arreglo[i] / (acc+=curr) = (total+= arreglo[i]) / 0 = total = 0
const total2 = arreglo.reduce( (acc, curr) => acc+=curr , 0 )
console.log(total2)

const carrito = [
    {name: 'libro', price: 200},
    {name: 'Maleta', price: 560},
    {name: 'Borrador', price: 40},
    {name: 'Libro2', price: 890}
]
const totalCarrito = carrito.reduce( (acc, curr) => acc+=curr.price, 0)
console.log('TotalCarrito:', totalCarrito)


//some 
const existe = carrito.some( elem => elem.name === 'Maleta')
console.log('existe:' ,existe)//true
const noExiste = carrito.some( elem => elem.name === 'tasa')
console.log('No existe:', noExiste)//false

//delete
const newCarrito = carrito.filter(elem => elem.name !== 'Maleta')
console.log('newCarrito:', newCarrito)
