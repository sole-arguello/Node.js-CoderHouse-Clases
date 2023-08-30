/**
 * Crear un proyecto en node que genere 10000 numeros aleatorios en un rango de 1 a 20
 * 
 * Crear un objeto cuyas claves sean los numeros salidos y el valor asociado a cada clave sera 
 * la cantidad de veces que salio ese numero. Representar por onsola los resultados
 * 
 * 
 * Math es una funcion matematica que brinda numeros aleatorios
 * Math.random() brinda un numero aleatorio de 0 a 1
 * Math.random() * 20 brinda un numero aleatorio de 0 a 20
 * ceil es una funcion para redondear para abajo
 * Math.ceil(Math.random() * 20) brinda un numero aleatorio de 1 a 20
 */

// numero aleatorio del 1 al 20
// console.log( 'Forma 1:', Math.ceil(Math.random() * 20)) 
// console.log('Forma 2:',Math.floor(Math.random() * 20) + 1);


// const obj = { 1:100, 2:330, 'location-city': 'Madrid' }
// //1 forma: obj.hasOwnProperty('nombreProperty')
// //2 forma: obj['nombreProperty']
// //3 forma: obj.nombreProperty => solo para propiedades con nombre tipo string sencillos 
// //4 forma: obj.property = 'valor1'


// console.log(obj['location-city']); // devleve 'Madrid'
// console.log(obj.hasOwnProperty('location-city')) //devuelve true;
// obj.property = 'valor1'//asigna 'valor1' al objeto como string
// console.log(obj);
// obj[3] = 200// asingia 200 al objeto como numero
// console.log(obj);


let aleatorios = {}
for(let i = 0; i < 10000; i++){
    const numAleatorio = Math.ceil(Math.random() * 20)
    //console.log(numAleatorio)
    if(aleatorios[numAleatorio]){
        aleatorios[numAleatorio]++
        //console.log(aleatorios)
    }else{
        aleatorios[numAleatorio] = 1
       // console.log(aleatorios)
    }
    
}//setTimeout(() => console.log(aleatorios), 3000)

console.log(aleatorios)
//console.log(Object.values(aleatorios));

const total = Object.values(aleatorios).reduce((acc, curr) => acc+=curr, 0)
console.log(total);