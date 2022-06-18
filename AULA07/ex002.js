const prompt = require("prompt-sync")();

let aprovadosArray = [];
let recuperacaoArray = [];
let reprovadosArray = [];
let qtd = +prompt('Qual a quantidade de notas a serem armazenadas: ');

for(let i = 1; i <= qtd; i++){
    let nota = +prompt(`Digite a ${i}º nota: `);
    if(nota >= 0 && nota <= 10){
        if(nota >= 7){
            aprovadosArray.push(nota);
        }else if(nota >= 5 && nota < 7){
            recuperacaoArray.push(nota);
        }else{
            reprovadosArray.push(nota);
        }
    }else{
        console.log('Nota inválida digite novamente!');
        i--;
    }
}
console.log(`Total de alunos aprovados: ${aprovadosArray.length}`);
console.log(`Total de alunos em recuperação: ${recuperacaoArray.length}`);
console.log(`Total de alunos reprovados: ${reprovadosArray.length}`);