import fs from "fs";

export class CartsManagerFiles {
  constructor(path) {
    this.pathFile = path;
  }
  fileExist() {
    return fs.existsSync(this.pathFile);
  }

  //metodo para buscar todos los carritos
  async getCarts() {
    try {
      if (this.fileExist()) {
        const dataCarts = await fs.promises.readFile(this.pathFile, "utf-8");
        return JSON.parse(dataCarts);
      } else {
        throw new Error("No es posible obtener los carritos");
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  //metodo que busca por id
  async getCartsById(id) {
    try {
      //leo el archivo
      const carts = await this.getCarts();
      //busco por id
      const cartFound = carts.find((prod) => prod.id === id);
      if (cartFound) {
        return cartFound;
      } else {
        throw new Error("Carrito no encontrado");
      }
    } catch (error) {
      console.log(error.message);
      throw new Error("El Carrito es inexistente");
    }
  }
  //metodo que lee y crea los carritos

  async createCart() {
    try {
      // Lee los carritos existentes
      const carts = await this.getCarts();

      // Crea un nuevo ID autoincremental para el carrito
      let newId;
      if (carts.length === 0) {
        newId = 1;
      } else {
        newId = carts[carts.length - 1].id + 1;
      }
      //creo el carrito con el id y el producto vacio
      const newCart = {
        id: newId,
        products: [],
      };
      carts.push(newCart);

      // Sobrescribe el JSON con los carritos actualizados
      await fs.promises.writeFile(
        this.pathFile,
        JSON.stringify(carts, null, "\t")
      );
      //retorno el carrito cargado
      return newCart;
    } catch (error) {
      throw error;
    }
  }
}
