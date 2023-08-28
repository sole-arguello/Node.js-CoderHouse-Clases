const fs = require('fs')
console.log('------------ Caso 1 --------------')
//escribir un archivo
fs.writeFile('./ejemploCallback.txt', 'contenido callback', (error) =>{
    if(error){
        return console.log('Error al escribir el archivo')
    }
    console.log('Archivo escrito')
})

console.log('------------ Caso 2 --------------')
//escribir 

fs.writeFile('./ejemploCallbcak2.txt', 'contenido 2', (error) =>{
    if(error){
        return console.log('Error al escribir el archivo')
    }
    console.log('Archivo escrito2')
})

console.log('------------ Caso 3 --------------')
//escribir y leerlo

fs.writeFile('./ejemploCallbcak3.txt', 'contenido 3', (error) =>{
    if(error){
        return console.log('Error al escribir el archivo')
    }
    console.log('Archivo escrito3')
    //leo
    fs.readFile('./ejemploCallback3.txt', 'utf-8', (err, contenido) => {
        if(err){
            return console.log('Error al leer el archivo')
        }
        console.log('contenido: ', contenido)
    })
})

console.log('------------ Caso 4 --------------')
fs.writeFile('./ejemploCallback4.txt', 'contenido4', (error) =>{
    if(error){
        return console.log('Error al escribir el archivo')
    }
    console.log('Archivo Escrito')
    //leo
    fs.readFile('./ejemploCallback4.txt', 'utf-8', (err, resultado) =>{
        if(err){
            return console.log('Error al leer el archivo')
        }
        console.log('Contenido:', resultado)
            //elimino
        fs.unlink('./ejemploCallback4.txt', (err) =>{
            if(err){
                return console.log('Error al eliminar el archivo')
            }
            console.log('Archivo eliminado')
        })
    })
})