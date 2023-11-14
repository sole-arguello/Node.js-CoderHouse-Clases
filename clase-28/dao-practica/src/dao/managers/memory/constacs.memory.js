
export class ContactsMemory {
    constructor(){
        this.contacts = []
    }

    //metodos

    create(contactInfo){
        this.contacts.push(contactInfo)
        return 'contacto creado'
    }

    getAll(){
        return this.contacts
    }

    getOne(id){
        const contact = this.contacts.find(contact => contact.id === id)
        return contact 
    }

    update(){}
    delete(){}
}