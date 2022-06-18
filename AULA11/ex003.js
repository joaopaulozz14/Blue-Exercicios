const prompt = require("prompt-sync")();

function celsius(C){
    C = 0;
        //Celsius para Kelvinsdf
        K = temp + 273;
        console.log(`${temp}ºC é igual a: ${K} Kelvin`);
         //Celsius para Farenheit
        F = (1.8 * temp) + 32; 
        console.log(`${temp}ºC é igual a: ${F} Fahrenheit`);
        //Lista de retorno
        lista.push(K , F);
        return lista;
}
function kelvin(K){
    K = 0;
        //Kelvin para Celsius
        C = temp - 273;
        console.log(`${temp} Kelvin é igual a: ${C}ºC`);
        //Kelvin para Fahrenheit
        F = 1.8 * (temp - 273) + 32;
        console.log(`${temp} Kelvin é igual a: ${F} Fahrenheit`);
        //Lista de retorno
        lista.push(C , F);
        return lista;
}
function fahrenheit(F){
    F = 0;
        //Fahrenheit para Celsius
        C = (temp - 32)/180;
        console.log(`${temp} Farenheit é igual a: ${C}ºC`)
        //Fahrenheit para Kelvin
        K = (temp + 459.67) * (5/9);
        console.log(`${temp} Farenheit é igual a: ${K} Kelvin`);
        //Lista de retorno
        lista.push(C , K);
        return lista;
}
/**Entrada de dados */
let temp = +prompt("Digite a temperatura atual: ");
let escala = prompt("Em qual escala está a temperatura?(C/F/K): ");
let escalaUpper = escala.toLocaleUpperCase();
let lista = [];
let C = 0;
let F = 0;
let K = 0;

while(escalaUpper != 'C' && escalaUpper != 'F' && escalaUpper != 'K'){
    console.log("Caracter inválido! Digite novamente!")
    escalaUpper = prompt("Em qual escala está a temperatura?(C/F/K): ");
}

if(escalaUpper == 'C'){
    celsius();
}else if(escalaUpper == 'F'){
    fahrenheit();
}else if(escalaUpper == 'K'){
    kelvin();
}
/******Retorno que o usuário deseja*****/
let retorno = prompt(`Qual temperatura deseja retornar?(C/F/K) `);
let retornoUpper = retorno.toUpperCase();
while(retornoUpper != 'C' && retornoUpper != 'F' && retornoUpper != 'K'){
    console.log("Caracter inválido! Digite novamente!")
    retornoUpper = prompt("Qual temperatura deseja retornar?(C/F/K): ");
}

if(escalaUpper == 'C'){
    if(retornoUpper == 'F'){
        lista.indexOf(F);
    }
}else if(escalaUpper == 'F'){
    fahrenheit();
}else if(escalaUpper == 'K'){
    kelvin();
}