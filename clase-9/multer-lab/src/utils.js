import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

//indicar donde se guardan los archivos que se suben, diskStorage significa que se guardaran en disco
const storage = multer.diskStorage({
    //destination: carpeta donde se guardaran los archivos
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname , "../../public/images") );
    }, 
    //filename: con que nombre vamos a guardar los archivos
    filename: function (req, file, cb) {
        //fecha y nombre de la imagen
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})
//creo el middleware para subir las imagenes, a usar en las diferentes rutas
export const uploader = multer({storage})