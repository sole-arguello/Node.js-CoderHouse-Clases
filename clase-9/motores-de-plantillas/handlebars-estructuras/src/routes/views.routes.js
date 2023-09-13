import { Router } from 'express'

const router = Router()
//los paths
/*---------- Actividad en la clase ----------------*/
const users = [
    { nombr: 'Pepe', apellido: 'Perez', edad: 20, correo: '0oGzY@example.com', telefono: +1234567890 },
    { nombr: 'Juan', apellido: 'Diaz', edad: 30, correo: 'ana@example.com', telefono: +128987654321 },
    { nombr: 'Maria', apellido: 'Garcia', edad: 25, correo: 'pepaY@example.com', telefono: +8987654328 },
    { nombr: 'Luis', apellido: 'Gonzalez', edad: 28, correo: 'luis@correo', telefono: +2584567895 },
    { nombr: 'Maria', apellido: 'Carrasco', edad: 18, correo: 'maria@example.com', telefono: +9987654325 },
]

/*---------- Tema para entender la clase conjunto con la actividad ----------------*/
router.get('/', (req, res) => {
    res.render('home')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/profile', (req, res) => {
    //genero un numero aleatorio entre 0 y el tamaño del array, luego multiplico por el tamaño del array
    const randomNumber = Math.floor(Math.random() * users.length)
    const user = users[randomNumber]
    console.log('User: ', user);
    res.render('profile', user)
    //res.render('profile')
})


export { router as viewsRouter }