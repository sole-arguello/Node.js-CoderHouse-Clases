import fs from 'fs'

export class ProductManagerFile{
    constructor(path){
        this.filePath = path
    }

    fileExist(){
        return fs.existsSync(this.filePath)
    }
     
    async addProduct(product){
        
    }

    async getProducts(){
        try {
            if(this.fileExist()){
                const data = await fs.promises.readFile(this.filePath, 'utf-8')
                return JSON.parse(data)
            }else{
                throw new Error('Product does not exist')
            }
            
        } catch (error) {
            throw error
        }
    }

    async getProductById(pid){
        
    }

    async updatedProduct() {
        
    }
    async deleteProduct() {
        
    }
} 

