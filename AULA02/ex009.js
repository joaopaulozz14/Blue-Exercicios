const prompt = require("prompt-sync")();

let valorReal = 0;
let valorDolar = 5.01;

valorReal = +prompt("Digite a quantidade de reais: ");

let res = valorReal / valorDolar;

console.log(`${valorReal} real é igual a ${res.toFixed(2)}`);