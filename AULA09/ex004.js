const prompt = require("prompt-sync")();

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let res = 0;
let eleitores = +prompt("Digite a quantidade total de eleitores: ");
console.log('1º Candidato - Digite 1');
console.log('2º Candidato - Digite 2');
console.log('3º Candidato - Digite 3');
console.log();  
for(let i = 1; i <= eleitores; i++){
    res = +prompt(`Digite sua escolha ${i}º eleitor: `);
    if(res == 1){
        candidato1 = candidato1 + 1;
    }else if(res == 2){
        candidato2 = candidato2 + 1;
    }else if(res == 3){
        candidato3 = candidato3 + 1;
    }else{
        console.log('Número inválido! Digite novamente!');
        i--;
    }
}
console.log();
console.log('Resultado final!');
console.log(`Candidato 1: ${candidato1} votos`);
console.log(`Candidato 2: ${candidato2} votos`);
console.log(`Candidato 3: ${candidato3} votos`);