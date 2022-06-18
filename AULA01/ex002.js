const prompt = require("prompt-sync")();

let peças1 = +prompt("Digite a quantidade de peças: ");
let valor1 = +prompt("Digite o valor unitário das peças: ");

let peças2 = +prompt("Digite a quantidade das segundas peças: ");
let valor2 = +prompt("Digite o valor unitário das peças: ");

let preçoPeça1 = peças1 * valor1;  
let preçoPeça2 = peças2 * valor2;

console.log(`O valor total a ser pago na peça um será: ${preçoPeça1}`);
console.log(`O valor total a ser pago na peça dois será: ${preçoPeça2}`);