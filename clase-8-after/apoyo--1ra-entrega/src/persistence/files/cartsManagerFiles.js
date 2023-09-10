import fs from 'fs'

export class CartsManagerFiles{
    constructor(path){
        this.pathFile = path
    }
    fileExist(){
        return fs.existsSync(this.pathFile);
    }
    async getCarts(){
        try {
            if(this.fileExist()){
                const dataCarts = await fs.promises.readFile(this.pathFile, 'utf-8');
                return JSON.parse(dataCarts);
            }else{
                throw new Error('No es posible obtener los carritos');
            }
        } catch (error) {
            console.log(error.message)
            throw error;
        }
    }
}