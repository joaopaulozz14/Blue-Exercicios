const prompt = require("prompt-sync")();
let A = +prompt("Digite o valor para o lado 1: ");
let B = +prompt("Digite o valor para o lado 1: ");
let C = +prompt("Digite o valor para o lado 1: ");

let X = 0;

console.log();
console.log("----- ORDEM -----");
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log("-----------------");
console.log();

if (A < B)
{
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);

    console.log();
    console.log("----- ORDEM -----");
    console.log(`A: ${A} | B: ${B} | C: ${C}`);
    console.log("-----------------");
    console.log();
}

if (B < C)
{
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    X = B;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    B = C;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);
    C = X;
    console.log(`X: ${X} | B: ${B} | C: ${C}`);

    console.log();
    console.log("----- ORDEM -----");
    console.log(`A: ${A} | B: ${B} | C: ${C}`);
    console.log("-----------------");
    console.log();
}

if (A < B)
{
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);

    console.log();
    console.log("----- ORDEM -----");
    console.log(`A: ${A} | B: ${B} | C: ${C}`);
    console.log("-----------------");
    console.log();
}

console.log();
console.log("----- TIPO DE TRIÂNGULO -----");
console.log();

if (A >= (B + C))
{
    console.log("NÃO FORMA TRIÂNGULO");
}
else
{
    if ( (A*A) == ( (B*B) + (C*C) ) )
    {
        console.log("TRIANGULO RETÂNGULO");
    }
    if ( (A*A) > ( (B*B) + (C*C) ) )
    {
        console.log("TRIANGULO OBTUSÂNGULO");
    }
    if ( (A*A) < ( (B*B) + (C*C) ) )
    {
        console.log("TRIANGULO ACUTÂNGULO");
    }
    if ( A == B && B == C )
    {
        console.log("TRIANGULO EQUILATERO");
    }
    if ( (A == B && A != C) || (B == C && B != A) )
    {
        console.log("TRIANGULO ISOSCELES");
    }
}

console.log();
console.log();
console.log("----- FIM -----");
console.log();
console.log();