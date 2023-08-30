/**
 * Practica de modulos Nativos: fs + crypto
 * 
 * ¿Cómo lo hacemos? Se creará una clase “UserManager” que permitirá guardar usuarios en un archivo.
 *  El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña 
 * hasheada con crypto. Utilizar los módulos nativos  fs y crypto, El manager debe contar con los 
 * siguientes métodos:
 * El método “Crear usuario” debe recibir un objeto con los campos:
        Nombre
        Apellido
        Nombre de usuario
        Contraseña
 * El método debe guardar un usuario en un archivo “Usuarios.json”, recordando que la contraseña 
 * debe estar hasheada por seguridad
 * 
 * El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la 
 * contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la 
 * comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”,
 *  caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.
 */

const fs = require('fs')
const crypto = require('crypto')

class UserManager{

    #secret = 'coderCecretHash'
    constructor(path){
        this.path = path
    }

    fileExist(){
        return fs.existsSync(this.path)
    }

    async createUser(userInfo){
        try {
           if(this.fileExist()){
               //leer el contenido
               const contenido = await fs.promises.readFile(this.path, 'utf-8')
               
               //transfomar de string a json 
               const users = JSON.parse(contenido)
               //hash de la contraseña 
               userInfo.password = crypto.createHmac('sha256', this.#secret)//palabra secreta
                                   .update(userInfo.password)// coder
                                   .digest('hex')
               users.push(userInfo)
               
               //sobreescribir con el nuevo ususario
               await fs.promises.writeFile(this.path, JSON.stringify(users, null,'\t'))
               
               console.log('Usuario creado')
           } else{
                throw new Error('No es posible crear el usuario')
           }
        } catch (error) {
            throw error
        }
    }

    //es como un login
    async validateUser(userLogin){//{email: 'pepe@gmail.com', password: 'coder'}
        try {
            if(this.fileExist()){
                //leer el contenido
                const contenido = await fs.promises.readFile(this.path, 'utf-8')
                //transfomar de string a json  
                const users = JSON.parse(contenido)
                const user = users.find(user => user.email === userLogin.email)
                if(user){
                    const hashNewPass = crypto.createHmac('sha256', this.#secret)
                                                .update(userLogin.password)
                                                .digest('hex')
                    if(user.password === hashNewPass){
                        console.log('logueado');
                        
                    } else{
                        throw new Error('credenciales invalidas')
                    }
                }else{
                    throw new Error('El usuario no esta registrado')
                }
            } else{
                 throw new Error('No es posible logear el usuario')
            }
            
        } catch (error) {
            throw error
        }
    }
}

const operations = async () => {
    try {
        const manager = new UserManager('./usuarios.json')
        //await manager.createUser({name: 'pepe', email: 'pepe@gmail.com', password: 'coder'})
        //clave correcta
        await manager.validateUser({email: 'pepe@gmail.com', password: 'coder'})
        //clave incorrecta
        //await manager.validateUser({email: 'pepe@gmail.com', password: 'coderaaa'})
    } catch (error) {
        console.log(error.message);
    }
}

operations()