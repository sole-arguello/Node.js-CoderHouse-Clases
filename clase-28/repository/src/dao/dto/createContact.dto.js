export class CreateContactDto{
    constructor(constactInfo){
        this.full_name = `${constactInfo.first_name} ${constactInfo.last_name}`.toUpperCase()
        this.first_name = constactInfo.first_name
        this.last_name = constactInfo.last_name
        this.email = constactInfo.email

    }
}