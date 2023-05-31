// Continuando con lo anterior, tenemos una tabla de las temperaturas medias por mes de los doce meses en grados Fahrenheit; cómo hacemos para calcular el promedio anual en Celsius?

let temperaturaMediaAnualEnFahrenheit = [55, 60, 65, 63, 50, 45, 40, 38, 55, 57, 60, 64];

let  conversionDeFahrenheitACelsius = ((temperaturaMediaAnualEnFahrenheit[0] + temperaturaMediaAnualEnFahrenheit[1] + temperaturaMediaAnualEnFahrenheit[2] + temperaturaMediaAnualEnFahrenheit[3] + temperaturaMediaAnualEnFahrenheit[4] + temperaturaMediaAnualEnFahrenheit[5] + temperaturaMediaAnualEnFahrenheit[6] + temperaturaMediaAnualEnFahrenheit[7] + temperaturaMediaAnualEnFahrenheit[8] + temperaturaMediaAnualEnFahrenheit[9] + temperaturaMediaAnualEnFahrenheit[10] + temperaturaMediaAnualEnFahrenheit[11])/12 -32)*(5/9);

console.log(conversionDeFahrenheitACelsius); // Resultado 12,40 grados celsius

// Usando ciclos

let tempF = [55, 60, 65, 63, 50, 45, 40, 38, 55, 57, 60, 64];
let promedio =0;
for (let i = 0; i < tempF.length; i++) {
    promedio += tempF[i];
}
promedio = (promedio/tempF.length -32) * (5/9);
console.log(promedio) // resultado 12.40 grados celsius