const prompt = require("prompt-sync")();

let anos = +prompt("Digite os anos: ");
let meses = +prompt("Digite os meses: ");
let dias = +prompt("Digite os dias: ");

let anosParaDias = anos * 365;
let mesesParaDias = meses * 30;

let totalDias = anosParaDias + mesesParaDias + dias;
console.log("Total de dias q vc viveu: " + totalDias);