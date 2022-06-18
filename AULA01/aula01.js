console.log("Olá, mundo!");

//console.log(`Me chamo ${nome}, tenho ${idade}, moro em ${cidade}`);
//console.log("Meu nome é "+ nome + " tenho "+idade+" e moro em "+cidade);
const prompt = require('prompt-sync')
let nome = prompt('Qual é o seu nome?');
console.log(nome);