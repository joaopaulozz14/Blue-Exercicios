const prompt = require("prompt-sync")();

let idadeEmDias = +prompt("Digite sua idade em dias: ");

console.log(idadeEmDias);

let diasEmAnos = Math.trunc(idadeEmDias / 365);
console.log("Idade em anos: " + diasEmAnos);

let restoDias1 = idadeEmDias % 365;
console.log(restoDias1);

let diasEmMeses = Math.trunc(restoDias1 / 30);
console.log("Idade em meses: " + diasEmMeses);

let restoDias2 = restoDias1 % 30;
console.log(`Idade em dias: ${restoDias2}`);