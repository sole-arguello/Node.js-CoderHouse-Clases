import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

//dentro del proyecto ejecuto node src/utils.js
console.log('__dirname',__dirname);

//indicar donde se gaurdan los archivos que se suben, diskStorage es para almacenar en memoria
const storage = multer.diskStorage({
    //destination; carpeta donde se guardaran los archivos
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'))
    },
    //filename: nombre con el que se van a guardar los archivos
    filename: function (req, file, cb){
        //cb(null, `${Date.now()}-${file.originalname}`)//fecha en que se sube el archivo
        
        cb(null, `${req.body.name}-${file.originalname}`)//para cambiar el nombre del archivo
    }
})

//creamos un middleware para subir las imagenes, que usaremos para las distintas rutas
export const uploader = multer({storage})

