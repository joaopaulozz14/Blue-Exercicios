const prompt = require("prompt-sync")();

let nome = '';
let idade = 0;
let salario = 0;
let estadoCivil = '';
let res = false;

nomeFunction();
idadeFunction();
salarioFunction();
estadoCivilFunction();

function nomeFunction(){
    while(res == false){
        nome = prompt('Digite seu nome: ');
        if(nome.length <= 3){
            console.log('Nome deve possuir mais que 3 caracteres!');
        }else{
            console.log('Nome aceito!');
            res = true;
        }
    }
    return res;
}
function idadeFunction(){
    do{
        idade = +prompt('Digite sua idade: ');
        if(idade > 0 && idade < 150){
            console.log('Idade aceita!');
            res = false;
        }else{
            console.log('Idade inválida! Digite novamente!');
        }
    }while(res == true);
}

function salarioFunction(){
    salario = +prompt('Digite seu salário: ');
    if(salario <= 0){
        while(salario <= 0){
            console.log('Salário inválido! Digite novamente!')
            salario = +prompt('Digite seu salário: ');
        }
        console.log('Salário aceito!');
    }else{
        console.log('Salário aceito!');
    }
}

function estadoCivilFunction(){
    estadoCivil = prompt('Digite seu estado civil(s/c/v/d): ');

    if(estadoCivil == 's' || estadoCivil == 'c' || estadoCivil == 'v' || estadoCivil == 'd'){
        console.log('Estado civil aceito!');
    }else{
        while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd'){
            estadoCivil = prompt('Digite seu estado civil(s/c/v/d)');
        }
        console.log('Estado civil aceito!');
    }
}