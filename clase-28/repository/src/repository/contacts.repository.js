import { CreateContactDto } from "../dao/dto/createContact.dto.js"

export class ContactsRepository{
    constructor(dao){
        this.dao = dao
    }

    async getContacts(){
        return await this.dao.getAll()
    }
    async createContac(contact){
        const contactDto = new CreateContactDto(contact)
        return await this.dao.create(contactDto)
    }
    async getContact(id){
        return await this.dao.getOne(id)
    }
}