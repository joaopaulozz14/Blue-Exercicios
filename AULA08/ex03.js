const prompt = require("prompt-sync")();

let num = +prompt('Digite um número: ');
let res = 0;
for(let i = 1; i <= 10; i++){
    res = num * i;
    console.log(`${num} x ${i} = ${res}`);
}
console.log();
/********************************************/
for( let i = 0; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`)
}