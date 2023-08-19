//actividad de clase
/**Definir variables que almacenen datos (nombre, edad, precio, nombres de serialize y peliculas)
 * mostrar esos valores en consola
 * incrementar la edad en 1
 * una serie a la lista y volver a mostrarla
 * Compartir la definicion en el visual Studio Code
 * **/

//crear una variable
//(declaro + nombre) + asigno (=) + valor
var nombre = 'Soledad';
var edad = 47;
var precio = 20.5;
var series = ['Stranger thins', 'the office', 'breaking bad', 'loki']
var peliculas = [
    {
        titulo: 'Los vengadores',
        year: 2010,
        autores: ['Capitan america', 'Tony stark']
    },
    {
        titulo: 'Interstelar',
        year: 2008,
        autores: ['Jhon', 'Ana']
    }
]
//var datosVarios = ['juan', 29, true, [1,2,3], {name:'laura'}]
console.log(nombre)
console.log(edad)
console.log(precio)
console.log(series)
console.log(peliculas)

edad ++
//edad += 1
//edad = edad + 1
console.log(edad)

series.push('Bety la fea')
console.log(series)
console.table(series)
console.log(series[3])

