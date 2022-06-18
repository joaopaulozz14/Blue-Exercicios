const prompt = require("prompt-sync")();

let idadeArray = [];
let alturaArray = [];
let contador = 1;
let idade;
let altura;
let mediaAltura;
let mediaIdade;

while(contador <= 2){
    idade = +prompt("Digite a idade: ");
    altura = +prompt("DIgite a altura: ");
    contador++
    idadeArray.push(idade);
    alturaArray.push(altura);
}
console.log(idadeArray);
console.log(alturaArray);
let soma = 0;
let i = 0;
while(i < idadeArray.length){
    soma += idadeArray[i];
    i++
}
mediaIdade = soma / idadeArray.length;

soma = 0;
for(let i = 0; i < alturaArray.length; i++){
    soma += alturaArray[i];
}
mediaAltura = soma / alturaArray.length;

console.log(`A idade média é de: ${mediaIdade}`);
console.log(`A altura média é de: ${mediaAltura}`);