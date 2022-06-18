const prompt = require("prompt-sync")();

let nota1 = +prompt("Digite a primeira nota: ");
let nota2 = +prompt("Digite a segunda nota: ");
let nota3 = +prompt("Digite a terceira nota: ");
let nota4 = +prompt("Digite a quarta nota: ");

let mediaFinal = (nota1 + nota2 + nota3 + nota4)/4;

if(mediaFinal >= 7){
    console.log(`Aprovado! Nota:${mediaFinal}`);
}else if(mediaFinal >= 5 && mediaFinal < 7){
    console.log(`Em recuperação! Nota: ${mediaFinal}`);
}else if(mediaFinal < 5){
    console.log(`Reprovado! Nota: ${mediaFinal}`);
} 