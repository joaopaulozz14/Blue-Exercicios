const prompt = require("prompt-sync")();

let num1 = +prompt(`Digite um número: `);
let num2 = +prompt(`Digite outro número: `);
let operador = prompt("Digite o operador que realizará a operação: (/, *, + ou -) : ");
let res = 0;
function formato(num1, num2, operador){
    let operador;
    if(operador == '+'){
        res = num1 + num2;
        console.log(`${num1} + ${num2} = ${res}`);
    }else if(operador == '-'){
        res = num1 - num2;
        console.log(`${num1} - ${num2} = ${res}`);
    }else if(operador == '*'){
        res = num1 * num2;
        console.log(`${num1} * ${num2} = ${res}`);
    }else if(operador == '/'){
        if(num1 > num2){
            res = num1/num2;
            console.log(`${num1} / ${num2} = ${res}`);
        }else{
            res = num2/num1;
            console.log(`${num2} / ${num1} = ${res}`);
        }
        
    }

}

formato(num1, num2, operador);

//console.log(num1);
//console.log(num2);
//console.log(operador);