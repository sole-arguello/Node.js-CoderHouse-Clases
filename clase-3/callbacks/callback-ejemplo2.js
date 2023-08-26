//funcion receptora
const funcionReceptora = (nombre, funcionAEjecutar)=>{
    console.log('iniciando...')
    console.log('verificacion de variables')
    console.log(`Hola soy ${nombre}`)
    funcionAEjecutar()
}

//funcion que paso por argumento: callbaks

const saludar = ()=>{
    console.log('Buenos dias')
}

const despedir = ()=>{
    console.log('Adios!')
}

//ejecutamos la funcion principal y le paso el callback
funcionReceptora('pepito', saludar)
console.log('----------------------')
funcionReceptora('pepito', despedir)