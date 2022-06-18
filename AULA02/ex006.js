const prompt = require("prompt-sync")();

let vidaInimigo = +prompt('Digite a quantidade de vda do inimigo(entre 10 e 50): ');

let ataqueJogador = +prompt('Digite o valor de ataque do jogador(entre 5 e 10): ');

let contador = 0;

let turnos = Math.ceil(vidaInimigo / ataqueJogador);
console.log(`Foram necessários ${turnos} turnos para derrotar o inimigo!`);


if(vidaInimigo >=10 && vidaInimigo <=50 && ataqueJogador >= 5 && ataqueJogador <= 10){
    while(vidaInimigo > 0){
        vidaInimigo =  vidaInimigo - ataqueJogador;
        contador = contador + 1;
    }

}else{
    console.log('Números inválidos, digite novamente!');
}

if(vidaInimigo == 0){
    console.log(`Foram necessários ${contador} contadores para derrotar o inimigo!`);
}

