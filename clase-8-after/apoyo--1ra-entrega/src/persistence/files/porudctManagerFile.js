import fs from 'fs';

export class ProductManagerFile{
    //filePath contiene la ruta del Json
    constructor(filePath) {
        this.filePath = filePath;
    }
    //verifico que exista el archivo
    fileExist() {
        return fs.existsSync(this.filePath);
    }
    //metodo que lee y trae los productos
    async getProducts() {
        try {
            if (this.fileExist()) {
                const data = await fs.promises.readFile(this.filePath, 'utf-8');
                //transfoma de string a json
                return JSON.parse(data);
            } else {
                throw new Error('No es posible leer el archivo');
            }
        } catch (error) {
            console.log(error.message)
            throw error;
        }
    }
    //metodo que busca por id
    async getProductById(id){ 

        try {
            //leo el archivo
            const products = await this.getProducts();
            //busco por id
            const prodFound = products.find(prod => prod.id === id)
            if(prodFound) {
                return prodFound
                // console.log('Producto Encontrado con exito', prodFound);
            }
            else{
                throw new Error('Producto no encontrado');
            }
            
        } catch (error) {
            console.log(error.message);
            throw new Error ('El producto es inexistente')
        }

    }
    //metodo que lee y agrega productos
    async createProduct(infoProduct) {
        try {
            //verifico que los campos se carguen obligatoriamente
            if (!infoProduct.title || !infoProduct.description || !infoProduct.price || !infoProduct.thumbnail || !infoProduct.code || !infoProduct.stock) {
                throw new Error('Todos los campos son obligatorios');
            }
            //leo el producto en el archivo
            const products = await this.getProducts();
            
            //creo el id autoincremental
            let newId;
            if (products.length === 0) {
                newId = 1
            } else {
                newId = products[products.length - 1].id + 1;
            }
            
            //verifico si el codigo se repite y no lo agrego
            const codeExist = products.some( prod => prod.code === infoProduct.code)
            if(codeExist){
                return "El codigo " + infoProduct.code + " ya existe, no sera agregado nuevamente"
            } else{
                infoProduct.id = newId
                products.push(infoProduct);
            }
            //sobreescribo el con el nuevo producto el archivo
            await fs.promises.writeFile(this.filePath, JSON.stringify(products, null, '\t'));
            return infoProduct

            
        } catch (error) {
            throw error;
        }
    }

    //metodo que actualiza
    async updateProduct(id, product) {
        try {
            // Leer la lista de productos existentes
            const products = await this.getProducts();
            
            // Buscar el índice del producto que se va a actualizar
            const updateIndex = products.findIndex(prod => prod.id === id);
    
            if (updateIndex === -1) {
                throw new Error('Producto no encontrado');
            }
    
            // Verificar si el campo 'id' está presente en el objeto 'product'
            if (product.hasOwnProperty('id') && product.id !== id) {
                throw new Error('No está permitido modificar el ID del producto.');
            }
            // Actualizar los campos del producto con los nuevos valores (excepto el ID)
            products[updateIndex] = {
                ...products[updateIndex],
                ...product
            };
    
            // Sobrescribir el JSON con los productos actualizados
            await fs.promises.writeFile(this.filePath, JSON.stringify(products, null, '\t'));
            console.log('Producto actualizado con éxito');
            return products[updateIndex];
        } catch (error) {
            console.log(error.message);
            throw new Error('Archivo inexistente o no se puede actualizar');
        }
    }

    //metodo eliminar producto
    async deleteProduct(id) {
        try {
            //leo el archivo
            const products = await this.getProducts()
            //verifico si exite el id
            const existId = products.find(prod => prod.id === id)
            if(existId){
                //busco el producto a eliminar
                const deleteId = products.filter(prod => prod.id !== id);
                //sobreescribo el archivo sin el 
                await fs.promises.writeFile(this.filePath, JSON.stringify(deleteId, null, '\t'));
            } else {
                throw new Error('Producto no encontrado');
            }
        } catch (error) {
            console.log(error.message);
            throw new Error('El Producto a eliminar es inexistente');
        }
    }

}



// async updateProduct(id, product){
//     try {
//         //leo el producto
//         const products = await this.getProducts();
//         //busco la posicion del indice  
//         const updatetId = products.findIndex(prod => prod.id === id);

//             if (updatetId !== -1) {
//                 // Actualizo los campos del producto con los nuevos valores
//                 products[updatetId] = {
//                     ...products[updatetId],//conservo el id
//                     ...product //agrego los productos
//                 };
//                 //sobreescribo el json 
//                 await fs.promises.writeFile(this.filePath, JSON.stringify(products, null, '\t'));
//                 console.log('Producto actualizado con exito');
//             } else {
//                 throw new Error('Producto no encontrado');
//             }

//     } catch (error) {
//         console.log(error.message)
//         throw new Error('Archivo inexistente no se puede actualizar')
        
//     }
// }

// async updateProduct(id, product) {
//     try {
//         // Leer la lista de productos existentes
//         const products = await this.getProducts();
        
//         // Buscar el índice del producto que se va a actualizar
//         const updateIndex = products.findIndex(prod => prod.id === id);

//         if (updateIndex === -1) {
//             throw new Error('Producto no encontrado');
//         }

//         // Verificar si el código del producto a actualizar ya existe en otro producto
//         const isCodeDuplicate = products.some((prod, index) => {
//             return prod.code === product.code && index !== updateIndex;
//         });

//         if (isCodeDuplicate) {
//             throw new Error('El código de producto ya está en uso por otro producto.');
//         }

//         // Actualizar los campos del producto con los nuevos valores
//         products[updateIndex] = {
//             ...products[updateIndex], // Conservar el id
//             ...product // Agregar los nuevos valores
//         };

//         // Sobrescribir el JSON con los productos actualizados
//         await fs.promises.writeFile(this.filePath, JSON.stringify(products, null, '\t'));
//         console.log('Producto actualizado con éxito');
//         return products[updateIndex];
//     } catch (error) {
//         console.log(error.message);
//         throw new Error('Archivo inexistente o no se puede actualizar');
//     }
// }
