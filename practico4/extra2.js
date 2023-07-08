// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
// juego, es decir:
// ● Una jugada: gana el ganador de esa única jugada.
// ● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
// el usuario gane una jugada y la computadora la otra.
// ● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.

// Funcion que permite elegir la cantidad de rondas que se desea jugar: 1, 2 o 3 rondas.
function cantidadDeJugadas() {
    let askAgain = true;
    let numeroDeJugadas = 0;
    do {
    const readlineSync = require('readline-sync');
    numeroDeJugadas= parseInt((readlineSync.question('Cuantas jugadas deseas? 1, 2 o 3? ')));    
    } while ((numeroDeJugadas !== 1 && numeroDeJugadas !== 2 && numeroDeJugadas !== 3)) {
        switch (numeroDeJugadas) {
            case 1:
                numeroDeJugadas === '1';
                console.log(`Has elegido ${numeroDeJugadas} jugada`);
                break;
            case 2:
                numeroDeJugadas === '2';
                console.log(`Has elegido ${numeroDeJugadas} jugadas`);
                break;
            case 3:
                numeroDeJugadas === '3';
                console.log(`Has elegido ${numeroDeJugadas} jugadas`)
                break;
            default:
                console.log('El número de jugadas debe ser uno entre los valores permitidos.');
        };
        askAgain = false;
    }
    return numeroDeJugadas;    
};

// Funcion que elegi un valor random entre 0 y 2.
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}
// Funcion que de acuerdo al numero que se obtenga de la funcion anterior asocia un tipo de jugada.
function obtenerJugadaComputadora() {
    let jugadaComputadora = getRandomInt();
    if (jugadaComputadora === 0) {
        return 'piedra'
    } else if (jugadaComputadora === 1) {
        return 'papel'
    } else {
        return 'tijera'
    }
};

// Funcion que pregunta al usuario que ingrese un tipo de jugada, es decir, que elija entre piedra, papel o tijera.
function obtenerJugadaUsuario() {
    let preguntarDeNuevo = true;
    let jugadaUsuario = '';
    do {
        const readlineSync = require('readline-sync');
        jugadaUsuario = (readlineSync.question('Ingrese piedra, papel o tijera: ')).toLowerCase();
    } while (!((jugadaUsuario === 'piedra') || (jugadaUsuario === 'papel') || (jugadaUsuario === 'tijera'))); {
        switch (jugadaUsuario){
            case ('piedra'):
                break;
            case ('papel'):
                break;
            case ('tijera'):
                break;
            default :
                console.log(`La opción ${jugadaUsuario} no existe`);
        };
        preguntarDeNuevo = false;
    };
    return jugadaUsuario;                    
};      

// Funcion que determina ganador en funcion de las jugadas de la computadora y del usuario.
function determinarGanador(jugadaUsuario, jugadaComputadora) {
    let resultado;
    if (((jugadaUsuario === 'piedra') && (jugadaComputadora === 'tijera')) || 
        ((jugadaUsuario === 'papel') && (jugadaComputadora === 'piedra')) ||
        ((jugadaUsuario === 'tijera') && (jugadaComputadora === 'papel'))) {
            return resultado = 'Gana el usuario';
        } else if (((jugadaUsuario === 'piedra') && (jugadaComputadora === 'piedra')) || 
                ((jugadaUsuario === 'papel') && (jugadaComputadora === 'papel')) || 
                ((jugadaUsuario === 'tijera') && (jugadaComputadora === 'tijera'))) {
            return resultado = 'Empate';
        } else {
            return resultado = 'Gana la computadora';
        }
};

// Funcion que imprime por consula resultados.
function mensajeResultado(jugadaComputadora, jugadaUsuario, resultadoGanador) {
    console.log(`La computadora eligio: ${jugadaComputadora}.`);
    console.log(`El usuario eligio: ${jugadaUsuario}.`);
    console.log(`El resultado fue: ${resultadoGanador}.`);
};

let jugadas = cantidadDeJugadas();
let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultadoGanador = determinarGanador(jugadaUsuario, jugadaComputadora);
let mensaje = mensajeResultado(jugadaComputadora, jugadaUsuario, resultadoGanador);

//CANTIDAD DE PARTIDAS

// Funcion de una ronda.
function unaJugada(jugadas) {
    if(jugadas === 1) {
        return mensaje;
    };
};

let unaRonda = unaJugada(jugadas);

// Funcion de dos rondas.
function dosJugadas(jugadas) {
    let jugadasComputadora = [];
    let jugadasUsuario = [];
    if(jugadas === 2) {
        jugadasComputadora.push(jugadaComputadora);
        jugadasUsuario.push(jugadaUsuario);
        jugadasComputadora.push(obtenerJugadaComputadora());
        jugadasUsuario.push(obtenerJugadaUsuario());
        determinarGanador(jugadasUsuario[1], jugadasComputadora[1]);
        let resultadoGanador = determinarGanador(jugadasUsuario[1], jugadasComputadora[1]);
        console.log(`La computadora eligio: ${jugadasComputadora[1]}.`);
        console.log(`El usuario eligio: ${jugadasUsuario[1]}.`);
        console.log(`El resultado fue: ${resultadoGanador}.`);
        // console.log(jugadasUsuario)
        // console.log(jugadasComputadora);
        let primerResultado = determinarGanador(jugadasUsuario[0], jugadasComputadora[0]);
        let segundoResultado = determinarGanador(jugadasUsuario[1], jugadasComputadora[1]);
        console.log('El resultado de la primer jugada fue: ' + primerResultado + '.');
        console.log('El resultado de la segunda jugada fue: ' + segundoResultado + '.');
        if((primerResultado === 'Gana la computadora' && segundoResultado === 'Empate') || (primerResultado === 'Empate' && segundoResultado === 'Gana la computadora') || (primerResultado === 'Gana la computadora' && segundoResultado === 'Gana la computadora')) {
            console.log('El resultado final es: Gana la COMPUTADORA!');
        } else if ((primerResultado === 'Gana el usuario' && segundoResultado === 'Empate') || (primerResultado === 'Empate' && segundoResultado === 'Gana el usuario') || (primerResultado === 'Gana el usuario' && segundoResultado === 'Gana el usuario')) {
            console.log('El resultado final es: Gana el USUARIO!');
        } else {
            console.log('El resultado final es EMPATE!')
        }
    };  
};

let dosRondas = dosJugadas(jugadas);

// Funcion de 3 rondas.
function tresJugadas(jugadas) {
    let jugadasComputadora = [];
    let jugadasUsuario = [];
    if(jugadas === 3) {
        jugadasComputadora.push(jugadaComputadora);
        jugadasUsuario.push(jugadaUsuario);
        jugadasComputadora.push(obtenerJugadaComputadora());
        jugadasUsuario.push(obtenerJugadaUsuario());
        mensajeResultado(jugadasComputadora[1], jugadasUsuario[1], determinarGanador(jugadasUsuario[1], jugadasComputadora[1]))
        jugadasComputadora.push(obtenerJugadaComputadora());
        jugadasUsuario.push(obtenerJugadaUsuario());
        mensajeResultado(jugadasComputadora[2], jugadasUsuario[2], determinarGanador(jugadasUsuario[2], jugadasComputadora[2]))
        // console.log(jugadasUsuario)
        // console.log(jugadasComputadora);
        let primerResultado = determinarGanador(jugadasUsuario[0], jugadasComputadora[0]);
        let segundoResultado = determinarGanador(jugadasUsuario[1], jugadasComputadora[1]);
        let tercerResultado = determinarGanador(jugadasUsuario[2], jugadasComputadora[2]);
        console.log('El resultado de la primer jugada fue: ' + primerResultado + '.');
        console.log('El resultado de la segunda jugada fue: ' + segundoResultado + '.');
        console.log('El resultado de la tercer jugada fue: ' + tercerResultado + '.');
        // A partir de aca se determina al ganador.
        let resultadosFinales =[];
        resultadosFinales.push(primerResultado, segundoResultado, tercerResultado);
        let filtrando = resultadosFinales.filter(e => e.includes(('Gana el usuario')))
        let filtrando2 = resultadosFinales.filter(e => e.includes(('Gana la computadora')))
        let  filtrando3 = resultadosFinales.filter(e => e.includes(('Empate')))
        // console.log(filtrando);
        // console.log(filtrando2);
        // console.log(filtrando3);
        if((filtrando.length === 2) || (filtrando.length === 1 && filtrando3.length ===2) || (filtrando.length === 3)) {
            console.log('El resultado final es GANA EL USUARIO')
        } else if((filtrando2.length ===2) || (filtrando2.length === 1 && filtrando3.length === 2) || (filtrando2.length === 3)) {
            console.log('El resultado final es GANA LA COMPUTADORA.')
        } else if(filtrando.length === 1 && filtrando2.length === 1 && filtrando3.length === 1) {
            console.log('El resultado final es EMPATE.')
        } else{
            console.log('El resultado final es EMPATE.')
        };
    };  
};

let tresRondas = tresJugadas(jugadas);