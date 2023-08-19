//datos primitivos
const city = 'Bogota'
city = 'Sao Paulo'
console.log(city)//da error en consola

//datos objetos
const person = {
    name:'Pedro',
    edad: 20
}
person.name = 'Laura'
console.log(person)//imprime {name: 'Laura', edad: 20}

const number = [1,2,3,4]
number.push(5)
console.log(number) //imprime [1,2,3,4,5]