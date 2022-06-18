const prompt = require("prompt-sync")();
let usuario = '';
let senha = '';
do{
    usuario = prompt("Digite o nome de usuário: ");
    senha =  prompt("Digite a senha: ");
    if(usuario != senha){
        console.log("-----Login aceito-----");
    }
    if(usuario == senha){
        console.log("-----Erro digite novamente!-----");
    }
}while(usuario == senha)