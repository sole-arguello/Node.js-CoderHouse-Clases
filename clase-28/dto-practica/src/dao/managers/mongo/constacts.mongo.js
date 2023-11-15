import { contactsModel } from "../../models/constacts.model.js"

export class ContactsMongo{
    constructor(){
        this.model = contactsModel
    }

    //los metodos deben ser iguales a los de memoria pero con model
    //omologarlos
    async create(contactInfo){
        //recibir la misma info que en memoria
        const constactCreated = await this.model.create(contactInfo)
        //retornar la misma info que en memoria
        return 'contacto creado'
    }

    async getAll(){
        const contacts = await this.model.find()
        return contacts
    }

    async getOne(id){
        const contact = await this.model.findById(id)
        return contact 
    }

    update(){}
    delete(){}
}