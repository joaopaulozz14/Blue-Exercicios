const prompt = require("prompt-sync")();

let notaLista = [];
let nota = 0;
let i = 1;

while(i <= 4){
    nota = +prompt(`Digite a ${i}º nota: `);
    console.log(nota);
    if(nota >= 0 && nota <= 10){
        notaLista.push(nota);
        i++;
    }else{
        console.log("Nota inválida!");
    }
}
console.log(notaLista);

let soma = 0;
for(let i = 0; i < notaLista.length; i++){
    soma += notaLista[i];
}

let res = soma / (notaLista.length);
console.log(`A média final é de: ${res}`);