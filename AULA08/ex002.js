const prompt = require("prompt-sync")();

let numero = +prompt("Digite um número: ");
let res = 1;
for(let i = numero; i > 1; i--){
    res = res * i;
    console.log(res);
