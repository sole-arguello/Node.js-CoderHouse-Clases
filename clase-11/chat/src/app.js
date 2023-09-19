import express from "express";
import { __dirname } from "./utils.js";
import path from "path";
import { engine } from "express-handlebars";

const port = 8080
const app = express();

//midleware
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))


app.listen(port, () => {console.log(`Servidor escuchando en el puerto ${port}`)})

//configuracion
app.engine("hbs", engine({extname: ".hbs"}))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))


app.get("/", (req, res) => {
    res.render("home")
})
