const estudiantes = [
    {
        id: 1,
        nombre: 'juan',
        calificacion: 3.5
    },
    {
        id: 2,
        nombre: 'ana',
        calificacion: 2.0
    }
]

const obtenerEstudiante = (idEstudiante) =>{
    return new promiseHooks((resolve, reject) =>{
        const estudianteEncontrado = estudiantes.find(estudiante => estudiante.id === idEstudiante)
        if(estudianteEncontrado){
            resolve(estudianteEncontrado)
            //console.log(estudianteEncontrado)//si lo encuentra devuelve el elem sino undefined
        }else{
            reject(`El estudiante no encontrado`)
        }
    })
}

const aproboCurso = (estudiante) =>{
    return new Promise((resolve, reject) =>{
        if(estudiante.calificacion >= 3){
            resolve(`El estudiante ${estudiante.nombre} aprobo el curso`)
        }else{
            reject(`El estudiante ${estudiante.nombre} no aprobo el curso`)
        }
    })
}

//ejecuto la funcion para obtener los resultados
obtenerEstudiante(1)
.then( (resultado) =>{
    console.log(resultado)
    //reteorna la segunda promesa
    return aproboCurso(resultado)
})

//resultado de la segunda promesa
.then((resultado2daPromesa) =>{
    console.log(resultado2daPromesa)
})
.cathc((error) =>{
    console.log(`Error: ${error}`)
})
.finally( () => {
    console.log("las promesas ya terminaron de ejecutarse")
})