const prompt = require("prompt-sync")();

let dias = +prompt("Digite quantos dias você já viveu: ");
console.log(dias);

let anos = Math.trunc(dias / 365);
console.log(`Idade em anos: ${anos}`);

let restoDias1 = dias % 365;

let meses = Math.trunc(restoDias1 / 30);
console.log(`Idade em meses: ${meses}`);

let restoDias2 = restoDias1 % 30;
console.log(`Idade em dias: ${restoDias2}`);
