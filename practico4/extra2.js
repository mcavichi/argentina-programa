// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
// juego, es decir:
// ● Una jugada: gana el ganador de esa única jugada.
// ● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
// el usuario gane una jugada y la computadora la otra.
// ● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

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

function mensajeResultado() {
    return console.log(`La computadora eligio: ${jugadaComputadora}. El usuario eligio: ${jugadaUsuario}. El resultado fue: ${resultadoGanador}.`);
}

let jugadas = cantidadDeJugadas();
let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultadoGanador = determinarGanador(jugadaUsuario, jugadaComputadora);
let mensaje = mensajeResultado();

//CANTIDAD DE PARTIDAS

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

function unaJugada(jugadas) {
    if(jugadas === 1) {
        return resultadoGanador;
    };
};

unaJugada(jugadas);

function dosJugadas(jugadas) {
    let jugadasComputadora = [];
    let jugadasUsuario = [];
    if(jugadas === 2) {
        jugadasComputadora.push(jugadaComputadora);
        jugadasUsuario.push(jugadaUsuario);
        // console.log('La computadora jugo: ' + jugadasComputadora[0] + '.');
        // console.log('El usuario jugo: ' + jugadasUsuario[0] + '.');
        jugadasComputadora.push(jugadaComputadora);
        jugadasUsuario.push(obtenerJugadaUsuario());
        // console.log('La computadora jugo: ' + jugadasComputadora[1] + '.');
        // console.log('El usuario jugo: ' + jugadasUsuario[1] + '.');
        determinarGanador(jugadasUsuario[1], jugadasComputadora[1]);
        let resultadoGanador = determinarGanador(jugadasUsuario[1], jugadasComputadora[1]);
        console.log(`La computadora eligio: ${jugadasComputadora[1]}. El usuario eligio: ${jugadasUsuario[1]}. El resultado fue: ${resultadoGanador}.`);
    };
    return console.log(jugadasUsuario) + console.log(jugadasComputadora);
}

let dosRondas = dosJugadas(jugadas);

function tresJugadas() {

}
