const prompt = require("prompt-sync")();

console.log("Digite quantos sua idade completa em anos, meses e dias!");
let anos = +prompt("Digite os anos: ");
let meses = +prompt("Digite os meses: ");
let dias = +prompt("Digite os dias: ");

let resAnos = anos * 360;
let resMeses = meses * 30;

let totDias = resAnos + resMeses + dias;

console.log(`Você já viveu ${totDias} dias`);
