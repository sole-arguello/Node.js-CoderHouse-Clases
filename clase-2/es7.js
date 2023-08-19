//exponencial -> antes -> Math.pow(base,potencia)
console.log('-------------- Exponencial ---------------------')
const exponential = 2**4
console.log(exponential)//2*2*2*2 = 16
console.log('-------- Includes Numeros y Strings, condicional --------------')
//array.includes
const numeros = [1,2,3,4,5]
console.log(numeros.includes(9))// output: false
console.log(numeros.includes(3))// output: true

console.log('Este es el curso de node'.includes('node'))// output:true

const usuarios =['pepe', 'ana', 'juan']
if(usuarios.includes('juan')){
    console.log('Juan esta incluido en los usuarios')
}else{
    console.log('juan no esta incluido en los usuarios')
}
