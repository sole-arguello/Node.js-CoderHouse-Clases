import express from "express";
import { __dirname } from "./utils.js";
import path from "path";
import { engine } from "express-handlebars";
import { viewsRouter } from "./routes/views.routes.js";
import { Server } from "socket.io";

const port = 8080
const app = express();

//midleware
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

//servidor de http con express
const httpServer = app.listen(port, () => {console.log(`Servidor escuchando en el puerto ${port}`)})
//servidor de websockets con socket.io
const io = new Server(httpServer)

//configuracion
app.engine("hbs", engine({extname: ".hbs"}))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))


//routes
app.use("/", viewsRouter)
