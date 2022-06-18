const prompt = require("prompt-sync")();

let array = [];

for(let i = 1; i <= 20; i++){
    let numeroAleatorio = Math.floor(Math.random() * 100);
    if(array.includes(numeroAleatorio)){

    }else{
        array.push(numeroAleatorio);
    }
}

console.log(array);
console.log(array.sort());
