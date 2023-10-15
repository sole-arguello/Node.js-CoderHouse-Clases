import express from "express";
import mongoose from "mongoose";

import { studentsModel } from "./models/students.models.js";

import { engine } from "express-handlebars";
import path from "path";
import { __dirname } from "./utils.js";

const port = 8080;
const app = express();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

//handlebars
app.engine(".hbs", engine({extname: ".hbs"}));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", async (req, res) => {
    try {
        const {page} = req.query

        const resul = await studentsModel.paginate({}, {limit: 4, page: parseInt(page) , lean: true});
        console.log(resul)
        res.render("home", resul)
    } catch (error) {
        res.send(error.message);
    }
})


// const students  = [
//     //primer nombre - segundo nombre - email - genero - grade - group //no repetir nombres 
//     {first_name: "Jose", last_name: "Perez", email: "jose@perez", gender: "Male", grade: "8", group: "1A"},
//     {first_name: "Juan", last_name: "Juares", email: "juan@perez", gender: "Male", grade: "4", group: "2B"},
//     {first_name: "Maria", last_name: "Ruiz", email: "maria@perez", gender: "Female", grade: "9", group: "2A"},
//     {first_name: "Pedro", last_name: "Ramirez", email: "pedro@perez", gender: "Male", grade: "7", group: "1A"},
//     {first_name: "Ana", last_name: "Lopez", email: "ana@perez", gender: "Female", grade: "8", group: "2A"},
//     {first_name: "Luis", last_name: "Martinez", email: "luis@perez", gender: "Male", grade: "6", group: "1A"},
//     {first_name: "Sofia", last_name: "Garcia", email: "sofia@perez", gender: "Female", grade: "5", group: "2B"},
//     {first_name: "Carlos", last_name: "Perez", email: "carlos@perez", gender: "Male", grade: "9", group: "2B"},
//     {first_name: "Laura", last_name: "Gomez", email: "laura@perez", gender: "Female", grade: "7", group: "1A"},
//     {first_name: "Miguel", last_name: "Gonzalez", email: "miguel@perez", gender: "Male", grade: "8", group: "2A"},
//     {first_name: "Jose", last_name: "Peralta", email: "jose@perez", gender: "Male", grade: "8", group: "1A"},
//     {first_name: "Julio", last_name: "Juares", email: "juan@perez", gender: "Male", grade: "4", group: "2B"},
//     {first_name: "Miriam", last_name: "Ruiz", email: "maria@perez", gender: "Female", grade: "9", group: "2A"},
//     {first_name: "Pablo", last_name: "Ramirez", email: "pedro@perez", gender: "Male", grade: "7", group: "1A"},
//     {first_name: "julia", last_name: "Lopez", email: "ana@perez", gender: "Female", grade: "8", group: "2A"},
//     {first_name: "Lorenzo", last_name: "Martinez", email: "luis@perez", gender: "Male", grade: "6", group: "1A"},
//     {first_name: "Lorena", last_name: "Garcia", email: "sofia@perez", gender: "Female", grade: "5", group: "2B"},
//     {first_name: "Marcos", last_name: "Perez", email: "carlos@perez", gender: "Male", grade: "9", group: "2B"},
//     {first_name: "Cecilia", last_name: "Gomez", email: "laura@perez", gender: "Female", grade: "7", group: "1A"},
//     {first_name: "Matias", last_name: "Gonzalez", email: "miguel@perez", gender: "Male", grade: "8", group: "2A"},
// ]

const operationsDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://soledadar:g04D4zMd9O4y2GvK@cluster0.njbseut.mongodb.net/universidadDB?retryWrites=true&w=majority");
        console.log("DB CONECTADA");
        //solo para cargar la db
        // const result = await studentsModel.create(students);
        // console.log(result);

        //p0aginacion

        // const result = await studentsModel.paginate(
        //     {
        //         //filtro de los datos, si lo dejo vacio por defecto no aplica el filtro y trabaja con todos los 
        //         //documentos de la coleccion 
        //     }, 
        //     //recibe dos parametros el primero es cuantos documentos entregar en cada pagina 
        //     //y el segundo es el numero de la pagina
        //     {limit: 6, page: 4}
        //     );
        //     //page 1 en la primera consulta obtiene los primeros 4 datos
        //     //page 2 en la segunda consulta obtiene los siguientes 4 datos
        //     //page 3 en la tercera consulta obtiene los siguientes 4 datos
        //     console.log( result);
    } catch (error) {
        console.log(error.message )    
    }
}
operationsDB();
