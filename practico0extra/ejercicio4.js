// Queremos representar un equipo de fútbol 5. Para ello necesitamos tener el nombre de 
//cada jugador, su posición (arco, defensa, mediocampo, adelante) y su edad. ¿Cómo
//representamos a cada jugador? ¿Cómo representamos un equipo? ¿Cómo 
//representamos los 8 equipos que juegan el torneo?

// Equipo A
let jugadorA1 = {Nombre: 'Leo', Posicion: 'arco', Edad: 36};
let jugadorA2 = {Nombre: 'Marcos', Posicion: 'defensa', Edad: 37};
let jugadorA3 = {Nombre: 'Claudio', Posicion: 'mediocampo', Edad: 37};
let jugadorA4 = {Nombre: 'Matias', Posicion: 'adelante', Edad: 36};
let jugadorA5 = {Nombre: 'Nanu', Posicion: 'mediocampo', Edad: 40};

// Equipo B
let jugadorB1 = {Nombre: 'Henry', Posicion: 'arco', Edad: 36};
let jugadorB2 = {Nombre: 'Fosas', Posicion: 'defensa', Edad: 37};
let jugadorB3 = {Nombre: 'Mario', Posicion: 'mediocampo', Edad: 37};
let jugadorB4 = {Nombre: 'Gabi', Posicion: 'adelante', Edad: 36};
let jugadorB5 = {Nombre: 'Fede', Posicion: 'mediocampo', Edad: 40};

// Equipo C
let jugadorC1 = {Nombre: 'Pedro', Posicion: 'arco', Edad: 36};
let jugadorC2 = {Nombre: 'Manuel', Posicion: 'defensa', Edad: 37};
let jugadorC3 = {Nombre: 'Carlos', Posicion: 'mediocampo', Edad: 37};
let jugadorC4 = {Nombre: 'Maxi', Posicion: 'adelante', Edad: 36};
let jugadorC5 = {Nombre: 'Roberto', Posicion: 'mediocampo', Edad: 40};

// Equipo D
let jugadorD1 = {Nombre: 'German', Posicion: 'arco', Edad: 36};
let jugadorD2 = {Nombre: 'Gustavo', Posicion: 'defensa', Edad: 37};
let jugadorD3 = {Nombre: 'Ivan', Posicion: 'mediocampo', Edad: 37};
let jugadorD4 = {Nombre: 'Patricio', Posicion: 'adelante', Edad: 36};
let jugadorD5 = {Nombre: 'Fernando', Posicion: 'mediocampo', Edad: 40};

// Equipo E
let jugadorE1 = {Nombre: 'Nacho', Posicion: 'arco', Edad: 36};
let jugadorE2 = {Nombre: 'Nico', Posicion: 'defensa', Edad: 37};
let jugadorE3 = {Nombre: 'Seba', Posicion: 'mediocampo', Edad: 37};
let jugadorE4 = {Nombre: 'Agustin', Posicion: 'adelante', Edad: 36};
let jugadorE5 = {Nombre: 'Cesar', Posicion: 'mediocampo', Edad: 40};

// Equipo F
let jugadorF1 = {Nombre: 'Nestor', Posicion: 'arco', Edad: 36};
let jugadorF2 = {Nombre: 'Juan', Posicion: 'defensa', Edad: 37};
let jugadorF3 = {Nombre: 'Ricardo', Posicion: 'mediocampo', Edad: 37};
let jugadorF4 = {Nombre: 'Pablo', Posicion: 'adelante', Edad: 36};
let jugadorF5 = {Nombre: 'David', Posicion: 'mediocampo', Edad: 40};

// Equipo G
let jugadorG1 = {Nombre: 'Valentin', Posicion: 'arco', Edad: 36};
let jugadorG2 = {Nombre: 'Mirko', Posicion: 'defensa', Edad: 37};
let jugadorG3 = {Nombre: 'Julian', Posicion: 'mediocampo', Edad: 37};
let jugadorG4 = {Nombre: 'Tomas', Posicion: 'adelante', Edad: 36};
let jugadorG5 = {Nombre: 'Lisandro', Posicion: 'mediocampo', Edad: 40};

// Equipo H
let jugadorH1 = {Nombre: 'Valentin', Posicion: 'arco', Edad: 36};
let jugadorH2 = {Nombre: 'Fausto', Posicion: 'defensa', Edad: 37};
let jugadorH3 = {Nombre: 'Vito', Posicion: 'mediocampo', Edad: 37};
let jugadorH4 = {Nombre: 'Hector', Posicion: 'adelante', Edad: 36};
let jugadorH5 = {Nombre: 'Ezequiel', Posicion: 'mediocampo', Edad: 40};

let equipoA = [jugadorA1, jugadorA2, jugadorA3, jugadorA4, jugadorA5]
let equipoB = [jugadorB1, jugadorB2, jugadorB3, jugadorB4, jugadorB5]
let equipoC = [jugadorC1, jugadorC2, jugadorC3, jugadorC4, jugadorC5]
let equipoD = [jugadorD1, jugadorD2, jugadorD3, jugadorD4, jugadorD5]
let equipoE = [jugadorE1, jugadorE2, jugadorE3, jugadorE4, jugadorE5]
let equipoF = [jugadorF1, jugadorF2, jugadorF3, jugadorF4, jugadorF5]
let equipoG = [jugadorG1, jugadorG2, jugadorG3, jugadorG4, jugadorG5]
let equipoH = [jugadorH1, jugadorH2, jugadorH3, jugadorH4, jugadorH5]

let torneo = [equipoA, equipoB, equipoC, equipoD, equipoE, equipoF, equipoG, equipoH]

console.log(jugadorH3.Nombre) // Vito
console.log(equipoA[0].Edad) // 36
console.log(equipoD[4]) // {Nombre: 'Fernando', Posicion: 'mediocampo', Edad: 40}