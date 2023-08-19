
//function sumar(num1, num2){}
const sumar = (num1,num2) => {
    let resul = num1 + num2
    return resul
}

const res = sumar(2,3)
console.log(res)//imprime 5

//implicita
const multip = (num1, num2) => num1 * num2 //sugar sintax
const mostrarNombre = nombre => `hola${nombre}`//template string
console.log(mostrarNombre('juan'))

//