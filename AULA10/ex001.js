const prompt = require("prompt-sync")();

let num = +prompt('Digite um número inteiro: ');
let res = 0;
contador = 0;
for(let i = num; i >= 1; i--){
    res = num % i;
    if(res == 0){
        contador++;
    }
}

if(contador == 2){
    console.log(`${num} é um número primo!`);
}else{
    console.log(`${num} não é um número primo!`);
}
