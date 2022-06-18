const prompt = require("prompt-sync")();

let carros = ['uno', 'palio', 'voyage', 'gol', 'ford ka'];
let consumo = ['13', '10', '15', '12', '14'];

console.log(carros[3]);
for(let i = 0; i < carros.length; i++){
    console.log(i,carros[i])
    carros[i] = i;
}




consumo.sort();
console.log(consumo);
console.log(`Menor consumo por quilometro é de: ${consumo[0]}`);