import express from 'express';
import cookieParser from 'cookie-parser';

const port = 8080;
const app = express();
//middlewares
app.use(cookieParser('claveSecretCookie'))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})


//ruta para crear cookies
app.get('/set-cookie', (req, res) => {
    //recibe dos parametros, uno es el nombre con el cula identifico la cookie
    // y el segundo el tipo de parametro, el terce son funciones "options"
    //res.cookie('galleta1', 'oreo', {maxAge: 5000}).send('cookie creada')
    res.cookie('galleta1', 'oreo').send('cookie creada')
})
app.get('/set-cookie2', (req, res) => {
    res.cookie('galleta2', 'Ritz').send('cookie 2 creada')
})
//para leer cookies
app.get('/get-cookies', (req, res) => {
    console.log(req.cookies)
    res.send('cookie recibida')
});

//eliminar
app.get('/delete-cookie', (req, res) => {
    res.clearCookie('galleta1').send('cookie eliminada')
})

// aplicar seguridad a las cookie

//ruta crear cookie firmada 
app.get('/set-signedCookie', (req, res) => {
    res.cookie('userData', {email:'pepe@gmail.com', role: 'user' }, { signed: true }).send('cookie creada')
})

//lectura de cookie firmadas 
app.get('/get-signedCookie', (req, res) => {
    console.log(req.signedCookies)
    res.send('cookie recibida')
})



