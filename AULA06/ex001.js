const prompt = require("prompt-sync")();

let array = [];
let arrayPar = [];
let arrayImpar = [];
let contador = 1;
let numeros;
while(contador <= 20){
    numeros = +prompt("Digite um número: ");
    array.push(numeros);
    contador++
    if(numeros%2 == 0){
        arrayPar.push(numeros);
        console.log(`Número Par ${numeros}`)
    }else{
        arrayImpar.push(numeros);
        console.log(`Número Ímpar ${numeros}`)
    }
}
console.log(`Números pares: ${arrayPar};`);
console.log(`Números Ímpares: ${arrayImpar};`);
console.log(`Todos os números: ${array};`);