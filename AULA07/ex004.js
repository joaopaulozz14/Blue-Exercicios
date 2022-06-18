const prompt = require("prompt-sync")();

let usuario;
let senha;
const regex = /\W/;


usuario = prompt('Digite o nome do usuário: ');
senha = prompt('Digite a senha do usuário(8 caracteres, 1 numero, 1 especial): ')
console.log(regex.exec(senha));
console.log(regex.test(senha));

if(regex.test(senha) == true && senha.length >= 8){
    console.log("Login realizado com sucesso!");
}else{
    console.log('Senha inválida');
}