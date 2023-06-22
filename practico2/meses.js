// Escriba un programa que solicite al usuario ingresar un número entero del 1 al
// 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
// marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
// vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
// el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
// consistirá de imprimir por consola la cantidad de días que tiene el mes
// ingresado bajo el siguiente formato:
// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
// Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
// de dias del mes de enero es 31”.
// NOTAS:
// ● Nota que el valor de [mes] no es el numero ingresado si no su
// correspondiente almacenado en la estructura de datos elegida.
// ● Para el alcance de este ejercicio, podemos pensar que febrero siempre
// tiene 28 días.

const readlineSync = require('readline-sync');
const mes = readlineSync.question('Ingrese un numero entero del 1 al 12: ');

const meses = [
                {mes: 1, nombre: 'Enero', cantidadDeDias: 31},
                {mes: 2, nombre: 'Febrero', cantidadDeDias: 28},
                {mes: 3, nombre: 'Marzo', cantidadDeDias: 31},
                {mes: 4, nombre: 'Abril', cantidadDeDias: 30},
                {mes: 5, nombre: 'Mayo', cantidadDeDias: 31},
                {mes: 6, nombre: 'Junio', cantidadDeDias: 30},
                {mes: 7, nombre: 'Julio', cantidadDeDias: 31},
                {mes: 8, nombre: 'Agosto', cantidadDeDias: 31},
                {mes: 9, nombre: 'Septiembre', cantidadDeDias: 30},
                {mes: 10, nombre: 'Octubre', cantidadDeDias: 31},
                {mes: 11, nombre: 'Noviembre', cantidadDeDias: 30},
                {mes: 12, nombre: 'Diciembre', cantidadDeDias: 31}
                ];


if (mes >= 1 && mes <= 12) {
    console.log(`La cantidad de dias del mes de ${meses[mes-1].nombre} es ${meses[mes-1].cantidadDeDias}`);
} else {
    console.log('El numero ingresado no esta entre 1 y 12 o ingreso un caracter no valido');
};

