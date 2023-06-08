// Operadores aritméticos:
// a. Crea cuatro variables que contengan valores numéricos.
// b. Suma las dos primeras variables y guarda el resultado en otra variable.
// c. Resta la cuarta variable de la tercera y almacena el resultado en otra
// variable.
// d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
// resultado en una variable llamada resultadoFinal. El producto debe ser
// 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
// e. Escribe un cálculo que verifique si resultadoFinal es un número par.
// Almacene el resultado en una variable llamada esPar.
// f. Imprima por consola un mensaje con el siguiente formato:
// “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La
// respuesta a verificar si el resultado final es par es: [esPar]”
// g. Deberá guardar este programa en un archivo llamado
// operacionesAritmeticas.js

let var1 = 1;
let var2 = 3;
let var3 = 22;
let var4 = 11;

let var5 = var1 + var2;
let var6 = var3 - var4;

let resultadoFinal = var5 * var6;
console.log(resultadoFinal) // 44
let esPar = resultadoFinal % 2 === 0;
console.log(esPar) // true
console.log('Mis variables iniciales fueron: %d, %d, %d y %d.', var1, var2, var3, var4);
// Mis variables iniciales fueron: 1, 3, 22 y 11. 
console.log('La respuesta a verificar si el resultado final es par es: ' + esPar); 
// La respuesta a verificar si el resultado final es par es: true 