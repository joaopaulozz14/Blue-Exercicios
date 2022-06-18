const prompt = require("prompt-sync")();

let adivinha =  Math.floor(Math.random() * 10);

let resp = +prompt('Tente adivinhar o número que a máquina escolheu: ');

if(resp >= 0 && resp <= 10){
    if(resp == adivinha){
        console.log('Você venceu!');
        console.log(`A máquina escolheu ${adivinha}`);
    }else{
        console.log('Você perdeu!');
        console.log(`A máquina escolheu ${adivinha}`);
    }
}else{
    console.log('Número inválido!');
}