//podemos usarlas para saber cuando un proceso termina

//callback
const notificacion = () => console.log('El proceso ya termino')
const finalProceso = () => console.log('Proceso finalizado')
// funcion proceso complejo
const funcionCompleja = (callback)=>{
    //proceso que toma un tiempo
    console.log('Proceso imagenes....')
    setTimeout( ()=> {
        // Esperando a termine el proceso
        callback()
    }, 3000)
}

//llamado de la funcion
funcionCompleja(notificacion)
