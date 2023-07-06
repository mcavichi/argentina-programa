//USANDO CONSTANTES
// Funcion que determina un numero ramdon entre 1 y 3.
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

// Funcion que hace que la computadora elija aleatoriamente entre piedra, papel o tijera.
function obtenerJugadaComputadora() {
    const jugadaComputadora = getRandomInt();
    if (jugadaComputadora === 0) {
        return 'piedra'
    } else if (jugadaComputadora === 1) {
        return 'papel'
    } else {
        return 'tijera'
    }
};

// Funcion que solicita al usuario ingresar manualmente entre piedra, papel y tijera.
function obtenerJugadaUsuario() {
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
    };
    return jugadaUsuario;                    
};      

// Determina el ganador entre usuario y computadora
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

// Llamada de las funciones
const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultadoGanador = determinarGanador(jugadaUsuario, jugadaComputadora);

// Mensaje que imprime en pantalla
console.log(`La computadora eligio: ${jugadaComputadora}.`);
console.log(`El usuario eligio: ${jugadaUsuario}.`);
console.log(`El resultado fue: ${resultadoGanador}.`);


