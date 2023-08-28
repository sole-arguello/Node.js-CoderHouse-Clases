const fs = require('fs')

const rutaArchivo = './ejemploPromesas.txt'

const operaciones = async () =>{
    try {
      //escribir archivo
      await fs.promises.writeFile(rutaArchivo, 'contenido de archivo') 
      console.log('archivo escrito')//pendiente sino uso awwait, con await da undefined y esta bien

      //leer
      const resultado = await fs.promises.readFile(rutaArchivo, 'utf-8')
      console.log('Contenido: ', re)

      //eliminar
      await fs.promises.unlink(rutaArchivo)
      console.log('Archivo eliminado')
    } catch (error) {
        console.log('Error: ', error.message)
    }
}
operaciones()