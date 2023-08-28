const fs = require('fs')

const fileExist = fs.existsSync('./archivoCodigo.txt')
console.log('FileExist',fileExist)

if(fileExist){

    try {
        console.log('El archivo existe')
        //escribo en el archivos
        const rutaArchivo = './archivoCodigo.txt'
        const contenidoAEscribir = 'Este es mi primer texto'
        fs.writeFileSync(rutaArchivo, contenidoAEscribir)
        console.log('Archivo escrito')
        //leer
        const formato = 'utf-8'
        const contenido = fs.readFileSync('./archivoLeer.txt', formato)
        console.log('Contenido:', contenido)
    
        //eliminar
        fs.unlinkSync('./archivo3.txt')
        console.log('archivo eliminado') 
        
    } catch (error) {
       console.log('error:', error.message ) 
    }

}else{
    console.log('El archivo no existe')
}