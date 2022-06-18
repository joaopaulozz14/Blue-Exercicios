const prompt = require("prompt-sync")();
let dia = +prompt("Digite o dia: ");
let mes = +prompt("Digite o mês: ");
let ano = +prompt("Digite o ano com 4 números: ");

function data(dia, mes, ano){
    if(dia >= 0 && dia <= 31){

    }
    let mesArray = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 
    'setembro', 'outubro', 'novembro', 'dezembro'];
    let mesExtenso = mesArray[mes - 1];
    console.log(`${dia} de ${mesExtenso} de ${ano}`);
}
data(dia, mes, ano);