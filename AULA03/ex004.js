const prompt = require("prompt-sync")();

let num1 = +prompt("Digite o primeiro número: ");
let num2 = +prompt("Digite o segundo número: ");

if(num1 > num2){
    let res = num1 % num2;
    if(res == 0){
        console.log("São múltiplos");
    }else{
        console.log("Não são múltiplos");
    }
}
