import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

//dentro del proyecto ejecuto node src/utils.js
console.log('__dirname',__dirname);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: function (req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
export const uploader = multer({storage})

