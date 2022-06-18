const prompt = require("prompt-sync")();

let arrayPar = []; 
let arrayImpar = []; 
let numero = 0;
for( let i = 0; i < 6; i++){
    numero = +prompt('Digite um número inteiro: ');
    if((numero%2) == 0){
        arrayPar.push(numero);
    }else{
        arrayImpar.push(numero);
    }
}

console.log(arrayPar.sort());
console.log(arrayImpar.sort());
