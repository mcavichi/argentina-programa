// LISTA DE INVITADOS
// En este ejercicio, que guardaremos en un archivo listaDeInvitados.js, queremos que
// tomes una lista de nombres almacenados en un arreglo y los coloques en una lista de
// invitados. Pero no es tan fácil: no queremos dejar entrar a Jose y Sofia porque son
// codiciosos y groseros, ¡y siempre se comen toda la comida! Tenemos dos listas, una para
// admitir invitados y otra para rechazar invitados.
// La lista de personas es la siguiente: Jose, Maria, Juan, Andres, Lionel, Sofia, Leandro y
// Emilia.
// Específicamente, queremos que:
// ● Escribas un bucle que itere desde 0 hasta la longitud del arreglo personas.
// Deberá comenzar con un inicializador de let i = 0; pero ¿qué condición de salida
// necesita?
// ● Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es
// igual a "Jose" o "Sofia" usando una declaración condicional:
// - Si es así, concatene el elemento al arreglo de rechazados.
// - Si no es así, concatene el elemento al arreglo de admitidos.
// ● Finalmente, queremos que escribas dos bucles más; uno para imprimir la lista de
// invitados admitidos y otra para imprimir la lista de invitados rechazados:
// a. Para la lista de invitados admitidos deberás imprimir por consola un
// mensaje inicial que dirá: “La lista de invitados admitidos es:”, seguido por
// tantos párrafos como tenga el arreglo admitidos conteniendo los
// respectivos nombres de los invitados.
// b. Para la lista de invitados rechazados deberás imprimir por consola un
// mensaje inicial que dirá: "La lista de invitados rechazados es:”, seguido por
// tantos párrafos como tenga el arreglo rechazados conteniendo los
// respectivos nombres de los invitados.

let invitados = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];
let rechazados = [];
let admitidos = [];

for (let i = 0; i < invitados.length; i++) {
    if(invitados[i] === 'Sofia' || invitados[i] === 'Jose') {
        rechazados.push(invitados[i]);
    } else {
        admitidos.push(invitados[i])
    }
};

console.log(rechazados); // [ 'Jose', 'Sofia' ]
console.log(admitidos); // [ 'Maria', 'Juan', 'Andres', 'Lionel', 'Leandro', 'Emilia' ]

let mensajeInicialAdmitidos = 'La lista de invitados admitidos es: ';

for (i = 0; i < admitidos.length; i++) {
    if (i === admitidos.length - 1) {
        mensajeInicialAdmitidos += 'y ' + admitidos[i] + '.';
    } else if (i === admitidos.length - 2) {
        mensajeInicialAdmitidos += admitidos[i]+ ' ';
    } else {
        mensajeInicialAdmitidos += admitidos[i] + ', ';
    }
};

console.log(mensajeInicialAdmitidos); // La lista de invitados admitidos es: Maria, Juan, Andres, Lionel, Leandro y Emilia. 


let mensajeInicialRechazados = 'La lista de invitados rechazados es: ';

for (i = 0; i < rechazados.length; i++) {
    if (i === rechazados.length - 1) {
        mensajeInicialRechazados += 'y ' + rechazados[i] + '.';
    } else if (i === rechazados.length - 2) {
        mensajeInicialRechazados += rechazados[i]+ ' ';
    } else {
        mensajeInicialRechazados += rechazados[i] + ', ';
    }
};

console.log(mensajeInicialRechazados); // La lista de invitados rechazados es: Jose y Sofia. 


// EXTRA: Después de completar con éxito las tareas anteriores, te quedarán dos
// listas de nombres, los admitidos y los rechazados pero estarán desordenados. El
// desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los
// nombres de manera ordenada alfabéticamente. Deberás agregar la palabra
// “ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos
// deberás imprimir: “La lista ordenada de invitados admitidos es:”.

// LISTA ORDENADA ADMITIDOS

let mensajeAdmitidos = 'La lista ordenada de invitados admitidos es: ';

for (i = 0; i < admitidos.length; i++) {
    admitidos.sort();
    if (i === admitidos.length - 1) {
        mensajeAdmitidos += 'y ' + admitidos[i] + '.';
    } else if (i === admitidos.length - 2) {
        mensajeAdmitidos += admitidos[i]+ ' ';
    } else {
        mensajeAdmitidos += admitidos[i] + ', ';
    }
};

console.log(mensajeAdmitidos); // La lista ordenada de invitados admitidos es: Andres, Emilia, Juan, Leandro, Lionel y Maria. 

// LISTA ORDENADA RECHAZADOS

let mensajeRechazados = 'La lista ordenada de invitados rechazados es: ';

for (i = 0; i < rechazados.length; i++) {
    admitidos.sort();
    if (i === rechazados.length - 1) {
        mensajeRechazados  += 'y ' + rechazados[i] + '.';
    } else if (i === rechazados.length - 2) {
        mensajeRechazados  += rechazados[i]+ ' ';
    } else {
        mensajeRechazados  += rechazados[i] + ', ';
    }
};

console.log(mensajeRechazados); // La lista ordenada de invitados rechazados es: Jose y Sofia.



