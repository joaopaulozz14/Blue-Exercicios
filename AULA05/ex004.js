const prompt = require("prompt-sync")();

let usuario = 0;
let numeroAleatorio = Math.floor(Math.random() * 9);

usuario = +prompt('Adivinhe o número que a máquina gerou (entre 0 e 10): ');

while(usuario != numeroAleatorio){
    if(usuario > numeroAleatorio){
        console.log('Errado! Você digitou um número maior que a máquina');
    }else{
        console.log('Errado! Você digitou um número menor que a máquina');
    }
    usuario = +prompt('Digite novamente: ');
}
if(usuario == numeroAleatorio){
    console.log('Parabéns você adivinhou o número!');
    console.log(`Máquina: ${numeroAleatorio}` );
    console.log(`Usuário: ${usuario}`);
}
