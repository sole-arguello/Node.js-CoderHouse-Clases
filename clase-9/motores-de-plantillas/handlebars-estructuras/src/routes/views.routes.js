import { Router } from 'express'

const router = Router()
//los paths


const food = [
    { name: 'pizza', price: 100 },
    { name: 'hamburguesa', price: 200 },
    { name: 'tacos', price: 300 },
    { name: 'sandwich', price: 400 }
]
//el que no tiene permisos
//const role = 'user'
//el que tiene permisos
const role = 'admin'

/*---------- Tema para entender la clase conjunto con la actividad ----------------*/
router.get('/', (req, res) => {
    res.render('home')
})

router.get('/products', (req, res) => {
    const data = { 
        products: food, 
        isAdmin: role === 'admin' ? true : false 
    }
    res.render('products', data)
})
export { router as viewsRouter }