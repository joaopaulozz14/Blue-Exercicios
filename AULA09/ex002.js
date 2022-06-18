const prompt = require("prompt-sync")();

let array = [];
let res = 0;
let num = +prompt('Digite um valor inteiro: ');

for(let i = 1; i <= num; i++){
    array.push(i);
}
console.log(array);
for(let i = 0; i < array.length; i++){
    res = array[i] % 2;
    if(res == 1){
        console.log(`${array[i]} é ímpar`);
    }
}