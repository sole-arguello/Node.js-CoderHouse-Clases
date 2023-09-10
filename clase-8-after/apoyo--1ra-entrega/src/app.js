import express from 'express';

import { productsRouter } from './router/products.routes.js';
import { cartsRouter } from './router/carts.routes.js';


const port = 8080
const app = express()

app.use(express.json())

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)


app.listen(port, () => console.log(`app listening on port ${port}!`))