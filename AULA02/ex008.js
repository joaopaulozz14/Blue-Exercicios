const prompt = require('prompt-sync')();

let valorCompra = 100.98;
let valorPago = 150;

let res = valorPago - valorCompra;

console.log(`Valor do troco é de R$ ${res.toFixed(2)}`);