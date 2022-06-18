const prompt = require("prompt-sync")();
let num1 = +prompt("Digite o primeiro número: ");
let num2 = +prompt("Digite o segundo número: ");

if(num1 > num2){
    console.log("O primeiro é o maior");
}else if(num1 < num2){
    console.log("O segundo número é o maior");
}else{
    console.log("Os números são iguais!");
}