const prompt = require("prompt-sync")();

let array = [];
for(let i = 0; i < 100; i++){
    let numeroAleatorio = Math.floor(Math.random() * 6 + 1);
    array.push(numeroAleatorio);
}
console.log(array);


