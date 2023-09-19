import express from "express";
import { __dirname } from "./utils.js";
import path from "path";
import { engine } from "express-handlebars";
import { viewsRouter } from "./routes/views.routes.js";

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


//routes
app.use("/", viewsRouter)
