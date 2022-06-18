const prompt = require("prompt-sync")();


let modelos = [];
let consumo = [];
let carro;
let km;
for(let i = 1; i <= 3; i++){
    console.log('----------------------------------------------')
    carro = prompt(`Digite o modelo do ${i}º carro: `);
    modelos.push(carro);
    km = +prompt(`Digite quantos km o ${i}º carro faz por litro: `);
    consumo.push(km);
    console.log('----------------------------------------------')
}
console.log(modelos);
console.log(consumo);

maisEconomico();
consumoDistancia();

function maisEconomico(){
    let maior = 0;
    let anterior = 0;
    let posicao = 0;
    let maisEconomico;
    
    for(let i = 0; i <= consumo.length; i++){
        anterior = consumo[i];
        if(anterior > maior){
            maior = consumo[i];
            posicao = i;
        }
    }
    for(let ind in modelos){
        if(posicao == ind){
            maisEconomico = modelos[ind];
        }
    }
    console.log('Carro mais economico: ',maisEconomico);
    console.log(`Que faz ${maior} km por litro!`);
}


function consumoDistancia(){
    let distancia = 1000;
    let res = 0;
    let custoTotal = 0;
    for(let i of consumo){
        res = distancia / i;
        custoTotal = res * 5.50;
        console.log(`Custo de combustível: R$${custoTotal}`);
    }
}