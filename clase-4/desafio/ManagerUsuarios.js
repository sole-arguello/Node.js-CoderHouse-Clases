/*
Crear un clase que permita gestionar Usuarios usando fs.promises que debe contar solo con dos metodos
    - Crear un ususario
    - Consultar los usuarios guardados
*/
/**
 * - El Manager debe vivir en una clase en un archivo externo llamdo ManagerUsuarios.js
 * - El metodo "Crear Usuario" debe recibir un objeto con los campos:
 *  (nombre, Apellido, edad, curso )
 * - El metodo debe guardar un susuario en un archivo "Usuarios.json", deben guardarlos dentro de un 
 *   arreglo, ya que se trabajan con multiples usuarios
 * - El metodo "ConsultarUsuarios" debe poder leer un archivo Usuarios.jsson y devolver el arreglo 
 *  correspondiente a esos usuarios
 */
const fs = require('fs')


class UserManager {
    constructor(filePath){
        this.filePath = filePath
    }

    fileExist(){
        //filePath es la ruta de archivo
        return fs.existsSync(this.filePath)
    }


    async getUsers(){
        try {
            if(this.fileExist()){
                //leer el contenido
                const contenido = await fs.promises.readFile(this.filePath, 'utf-8')
                
                //transfomar de string a json 
                const contenidoJson = JSON.parse(contenido)
                return contenidoJson

            }else{
                throw new Error('No es posible leer el archivo')
            }
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }


    async craeteUser(userInfo){
        try {
            if(this.fileExist()){
                //leer el contenido
                const contenido = await fs.promises.readFile(this.filePath, 'utf-8')
                
                //transfomar de string a json 
                const contenidoJson = JSON.parse(contenido)
                contenidoJson.push(userInfo)
                
                //sobreescribir con el nuevo ususario
                await fs.promises.writeFile(this.filePath, JSON.stringify(contenidoJson, null,'\t'))

                console.log('Usuario agregado')
            }else{
                throw new Error('No es posible guradar el usuario')
            }
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }


}

const operations = async () =>{
    try {
      const manager = new UserManager('./usuarios.json') 
      
      //tarigo los usuarios
      const users = await manager.getUsers()//devulve el contenido json []
      console.log('Usuarios', users)

      //creo los usuarios
      await manager.craeteUser({name: 'pepe', age: 20})//agrega usuario en el json
      await manager.craeteUser({name: 'maria', age: 30})
    } catch (error) {
        console.log(error.message)
    }
}
operations()