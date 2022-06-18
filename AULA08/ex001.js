const prompt = require("prompt-sync")();

let array = [];
let colunas = +prompt("Digite a quantidade de colunas: ");
let linhas = +prompt('Digite a quantidade de linhas: ');
let a = 0;

for(let i = 0; i < linhas; i++){
    for(let i = a; i < colunas + a; i++){
        array.push(i);
    }
    console.log(array);
    array = [];
    a++;
}


