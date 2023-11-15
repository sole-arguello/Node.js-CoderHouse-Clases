import { config } from "../config/config.js";

let contactsDao;
let productsDao;
let cartsDao;

const persistence = config.server.persistence

switch( persistence ) {
    case 'memory': {
        const {ContactsMemory} = await import('./managers/memory/constacs.memory.js')
        //const {ProductsMemory} = await import('./managers/memory/products.memory.js')
        contactsDao = new ContactsMemory();
        break
    }
    case 'mongo': {
        const { connectDB } = await import('../config/dbConnection.js');
        connectDB();
        const {ContactsMongo} = await import('./managers/mongo/constacts.mongo.js')
        contactsDao = new ContactsMongo();
        break
    }
    // case 'firebase': {
        
    // }
    // case 'file': {
        
    // }
    // case 'sql':{

    // }
    default: {
        //una persistencia a eleccion
    }

}

export { contactsDao }