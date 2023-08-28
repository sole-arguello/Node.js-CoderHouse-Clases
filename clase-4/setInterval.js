//se reinicia ej un reloj, un eslider

const internal = require("stream")

const contador = () =>{
    let counter = 0

    const intervalo = setInterval( () =>{
        counter ++
        console.log(new Date())
        console.log('counter: ', counter)
        if(counter >= 5){
            clearInterval(intervalo)
            console.log('fin de la tarea')
        }
    }, 1000)
}

contador()
console.log('Inicio tarea')