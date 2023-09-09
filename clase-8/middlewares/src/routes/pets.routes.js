import { Router } from "express";

const router = Router();

let pets = []
//const userRole = 'user'
const userRole = 'admin'

//middleware de enpoints
const isAdmin = (req, res, next) => {
    console.log('middleware de enpoints');
    if(userRole === 'user'){
        res.send('no tienes permiso')
    }else{
        req.isAdmin = true
        next()
    }
}

router.get('/', isAdmin, (req, res) => {
    res.json({data: pets})
})

router.post('/', isAdmin, (req, res) => {
    console.log('post pets', req);
    const petInfo = req.body
    if(!petInfo.name || !petInfo.age){
        res.json({message: 'faltan datos'})
        return
    }
    console.log("petsInfo", petInfo);
    pets.push(petInfo)
    res.json({message:'mascota creada'})
})


export {router as petsRouter}