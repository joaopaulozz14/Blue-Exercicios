const prompt = require("prompt-sync")();

let numero = 0;

numero = +prompt('Digite um número par: ');

while((numero%2) != 0){
    numero = +prompt('Digite um número par: ');
}