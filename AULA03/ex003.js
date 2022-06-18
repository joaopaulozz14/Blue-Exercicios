const prompt = require("prompt-sync")();

let num = +prompt("Digite um número: ");

let resultado = num % 2;

if(resultado == 0){
    console.log(`O número é par!`);
}else{
    console.log(`O número é ímpar`);
}