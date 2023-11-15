import express from "express";

import { contactRouter } from "./routes/contacts.routes.js";

const port = 8080;
const app = express();

//middleware
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});


app.use("/api/contacts", contactRouter);
