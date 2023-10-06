import express from 'express';
import { connectDB } from './config/db.Connection.js';


const port = 8080;
const app = express();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
connectDB()



