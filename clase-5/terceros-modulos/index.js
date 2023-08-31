/** Calculadora de edad
 * Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
 * Debe contar con una variable que almacene la fecha actual (utilizar moment())
 * Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
 * Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
 * Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. 
 * (utilizar el método diff()
 * Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al
 *  correr el programa.

 */

const moment = require('moment')

console.log(moment());//ofrece la fecha y hora actual

const today = moment()
console.log(today.format('YYYY-MM-DD'));
//formato: year/month/day
const birthDate = moment('1997-04-21')
console.log(birthDate.format('YYYY/MM/DD'));

if(birthDate.isValid()){
    console.log('formato valido');
    const age = today.diff(birthDate, 'years')
    console.log(age);
}else{
    console.log('formato invalido');
}

