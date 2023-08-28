const fs = require('fs')


const operations = async() =>{
    try {
        //leer
        const contenido = await fs.promises.readFile('./package.json', 'utf-8')
        //convierto a Json con Parse
        const Json = JSON.parse(contenido)
        console.log('Contenido: ', Json)
        console.log('Accsedo a los compos del JSON: ', Json.name)
        Json.author = 'Pepe'


        console.log('Contenido modificado')
        //convertir a String  con stringinfy y sobreescribo
        console.log('Archivo actualizado, ver el package.json') 
        await fs.promises.writeFile('./package.json', JSON.stringify(Json, null,'\t'))
               
    } catch (error) {
        console.log(error.message)
    }
} 
operations()