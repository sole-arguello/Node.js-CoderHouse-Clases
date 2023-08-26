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


//async-await
const operacionesAsincronas = async () =>{
        try{
            const estudiante = await obtenerEstudiante(1)
            const resultado = await aproboCurso(estudiante)
            console.log(resultado)
        } catch(error){
            console.log(error)
        }
}

operacionesAsincronas()