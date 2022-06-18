const prompt = require("prompt-sync")();

let salario = +prompt("Digite o salário do colaborador: ");
let novoSalario;
let percentual;

if(salario > 0 && salario <= 280){
    aumento = (salario *20)/100; 
    novoSalario = aumento + salario
    percentual = 20;
}else if(salario > 280 && salario <= 700){
    aumento = (salario * 15)/100;
    novoSalario = aumento + salario
    percentual = 15;
}else if(salario > 700 && salario <= 1500){
    aumento = (salario * 10) / 100;
    novoSalario = aumento + salario
    percentual = 10;
}else{
    aumento = (salario * 5)/100;
    novoSalario = aumento + salario
    percentual = 10;
}

console.log(`Salário inicial de: R$${salario}`);
console.log(`Aumento percentual de: ${percentual}%`);
console.log(`Aumento no valor de: R$${aumento}`);
console.log(`Novo salário de: R$${novoSalario}`)