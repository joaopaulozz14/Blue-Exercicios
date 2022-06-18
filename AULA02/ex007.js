const prompt = require("prompt-sync")();

let valorRefeicao = 42.54;
let taxaServico = 10;

let res = (valorRefeicao * taxaServico) / 100;

valorRefeicao = valorRefeicao + res;

console.log(`O valor total da conta é de R$ ${valorRefeicao.toFixed(2)}`);