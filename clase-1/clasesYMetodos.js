class Person {

    #course='javascript'//variable privada
    constructor(name, age, city){
        this.name=name;
        this.age=age
        this.city=city
    }

    saludar(){
        console.log(`hola soy ${this.name}`)
    }
    //geters
    getPrivatVariable(){
        console.log(this.#course)
    }
}

//objetos apartir de la clase
const person1 = new Person('juan', 20, 'valparaiso')//por medio de los parentesis estoy llamando a una funcion 'constructora'
console.log(person1)
person1.saludar()//uso el metodo

person1.getPrivatVariable()

const person2 = new Person('Pedro', 30, 'Mexico')
console.log(person2)
person2.saludar()