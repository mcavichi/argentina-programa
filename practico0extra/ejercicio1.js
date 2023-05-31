//En el ejercicio 4 se pedía calcular el promedio de 3 números. Supongamos que ahora nos llegan otros tres datos y queremos calcular el promedio de los 6 números. ¿Qué modificaciones debemos hacer al programa?

let numeros = [5, 7, 9 , 1, 3, 4];

let promedio = (numeros[0] + numeros[1] + numeros[2] + numeros[3] +numeros[4] +numeros[5]) / numeros.length;
console.log(promedio); // resultado 4.83