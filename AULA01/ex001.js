const prompt = require("prompt-sync")();
let nota1 = +prompt("Digite a primeira nota: ");
let nota2 = +prompt("Digite a segunda nota: ");

nota1 = nota1 * 4;
nota2 = nota2 * 6;

media = (nota1 + nota2)/10;
console.log(nota1);
console.log(nota2);
console.log(media);