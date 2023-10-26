import jwt from 'jsonwebtoken'

const PRIVATE_KEY = 'coderSecretToken'

export const generateToken = (user) => {//recibe los datos del usuario que se va a loguear
    //guardar informacion
    const token = jwt.sign(
        {name: user.name, email: user.email }, 
        PRIVATE_KEY,
        {expiresIn: '24h'}
        )
    return token

}

//middlewares
export const validateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']//obtengo el token
    console.log(authHeader)
    if(!authHeader) return res.sendStatus(401)//si no recibo el token y el encabezado rechaza la peticion
    
    const token = authHeader.split(' ')[1]
    console.log(token)
    if(token === null) return res.sendStatus(401)//me envia el encabezado pero no envio el token 

    jwt.verify(token, PRIVATE_KEY, (err, payload) => {//verifico que el tiempo de vida no expiro ni modificado
        if(err) return res.sendStatus(403)//si expiro o fue alterado rechazo la peticion
        req.user = payload// voy a tener la info del token y lo asingo a req.user
        next()
    })
}