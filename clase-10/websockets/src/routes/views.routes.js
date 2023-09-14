import { Router } from 'express'

const router = Router()
//los paths
const users = [
    { nombr: 'Pepe', apellido: 'Perez', edad: 20, correo: '0oGzY@example.com', telefono: +1234567890 },
    { nombr: 'Juan', apellido: 'Diaz', edad: 30, correo: 'ana@example.com', telefono: +128987654321 },
    { nombr: 'Maria', apellido: 'Garcia', edad: 25, correo: 'pepaY@example.com', telefono: +8987654328 },
    { nombr: 'Luis', apellido: 'Gonzalez', edad: 28, correo: 'luis@correo', telefono: +2584567895 },
    { nombr: 'Maria', apellido: 'Carrasco', edad: 18, correo: 'maria@example.com', telefono: +9987654325 },
]

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
    res.render('home', {style: 'home.css'})
})
router.get('/profile', (req, res) => {
        const randomNumber = Math.floor(Math.random() * users.length)
        const user = users[randomNumber]
        console.log('User: ', user);
        res.render('profile', {...user, style: 'profile.css'})
})

router.get('/products', (req, res) => {
    const data = { 
        products: food, 
        isAdmin: role === 'admin' ? true : false 
    }
    res.render('products', data)
})
export { router as viewsRouter }