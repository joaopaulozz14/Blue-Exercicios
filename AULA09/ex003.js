const prompt = require("prompt-sync")();

let array = [];
let num = 0;
let validacao = 0;
let tamanhoArray = 0;

while(validacao != 1){
    tamanhoArray = +prompt('Digite o tamanho da lista desejada: ');
    if(tamanhoArray >= 0){
        validacao = 1;
    }
}

console.log();
for(let i = 1; i <= tamanhoArray; i++){
    num = +prompt(`Digite o ${i}º número da lista: `);
    if(num < 0 || num >= 0){
        array.push(num);
    }else{
        console.log('Inválido!');
        i--;
    }
}
menorNumero();
maiorNumero();
soma();
function menorNumero(){
    let menor = 10000;
    for(let i = 0; i <= tamanhoArray; i++){
        if(array[i] < menor){
            menor = array[i];
        }
    }
    console.log(`O menor número é ${menor}`);
}

function maiorNumero(){
    let maior = 0;
    for(let i = 0; i <= tamanhoArray; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }
    console.log(`O maior número é ${maior}`);
}

function soma(){
    let res = 0;
    for(let i of array){
        res = res + i;
    }
    console.log(`A soma dos números é ${res}`)
}