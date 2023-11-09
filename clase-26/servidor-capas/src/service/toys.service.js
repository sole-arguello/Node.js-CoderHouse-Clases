import { toysDao } from '../dao/index.js';

//capa de coneccion entre las rutas y la capa de persistencia
export class ToysService {
    static getToys(){
        return toysDao.get()
    }
    static saveToy(toy){
        return toysDao.save(toy)
    }
}