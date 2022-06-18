const prompt = require("prompt-sync")();

console.log('Valores disponíveis entre R$ 10 e R$600');
let valor = +prompt("Digite o valor que deseja sacar: ");
let inteiro = 0;
let intTrunc = 0;
if(valor >= 100){
    inteiro = valor / 100;
    intTrunc = Math.trunc(inteiro);
    valor = valor - (intTrunc * 100); 
    console.log(`${intTrunc} notas de R$100,00`);
}
if(valor >= 50){
    let int = valor / 50;
    intTrunc = Math.trunc(int);
    valor = valor - (intTrunc * 50);
    console.log(`${intTrunc} notas de R$50,00`);
}
if(valor >= 10){
    let int = valor / 10;
    intTrunc = Math.trunc(int);
    valor = valor - (intTrunc * 10);
    console.log(`${intTrunc} notas de R$ 10,00`);
}
if(valor >= 5){
    let int = valor / 5;
    intTrunc = Math.trunc(int);
    valor = valor - (intTrunc * 5);
    console.log(`${intTrunc} notas de R$ 5,00`);
}
if(valor >= 1){
    let int = valor / 1;
    intTrunc = Math.trunc(int);
    valor = valor - (intTrunc * 1);
    console.log(`${intTrunc} notas de R$ 1,00`);
}
console.log(valor)