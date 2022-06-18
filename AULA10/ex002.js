const prompt = require("prompt-sync")();

let nomes = [];
let nome;

let qtd = +prompt('Digite a quantidade de nomes a serem colocados na lista: ');

for(let i = 1; i <= qtd; i++){
    nome = prompt(`Digite o ${i}º nome: `);
    nomes.push(nome);
}

let menor = 10000;
let menorNome;
let nomesIguais = [];
for(let i = 0; i < nomes.length; i++){

    if(nomes[i].length < menor){
        menor = nomes[i].length;
        menorNome = nomes[i];
        nomesIguais.push(menorNome);
        console.log('entrou aqui');
    }

    if(nomes[i].length < menor){
        console.log('aaaaa');
        nomesIguais = [];
        nomesIguais.push(menorNome);
        console.log(nomesIguais);
        console.log('bbbbbbbbbbbb')
    }else if(nomes[i].length == menor){
        console.log(nomesIguais);
        console.log('ccccc');
    }
}


console.log(menorNome);
console.log(nomesIguais);
