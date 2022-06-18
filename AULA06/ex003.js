const prompt = require("prompt-sync")();

let arrayNome = [];
let arrayNota = [];
let contador = 1;
let contador2 = 0;
let qtdAlunos;
let nome;
let nota;
let somaNota = 0;
let mediaNota;

qtdAlunos = +prompt("Digite a quantidade de alunos a serem cadastrados: ");

while(contador <= qtdAlunos){
    nome = prompt(`Digite o nome do aluno ${contador}º: `);
    nota = +prompt(`Digite a nota do aluno ${contador}º: `);
    arrayNome.push(nome);
    arrayNota.push(nota);
    contador++;
    somaNota = somaNota + nota;
    console.log(somaNota)
}

while(contador2 <= (qtdAlunos - 1)){
    console.log("---------------------");
    console.log(`Nome do aluno(a): ${arrayNome[contador2]}`);
    console.log(`Nota do aluno(a): ${arrayNota[contador2]}`);
    console.log("---------------------");
    contador2++;
}

mediaNota = somaNota/qtdAlunos;
console.log(`Média final da turma: ${mediaNota}`);
