/**Em terras britânicas, grande agitação pairava sobre a cabeça dos navegantes. 
 //Numa vida pacata e tranquila, viviam os cidadãos do pequeno vilarejo à beira-mar Stanton, que de seu trabalho alimentavam grande parte da burguesia da Inglaterra, com os nobres carangueijos encontrados naquela região. De pouca ou nenhuma educação seus habitantes traziam arraigados em suas almas as histórias vividas à muito por seus antepassados, histórias contadas de geração em geração, desde os antigos tempos dos piratas saqueadores e ladrões, às novíssimas invenções marítimas de navios que permitem uma navegação jamais vista. Dentre todas as recordações do imaginário popular, um se destaca como a mais assombrosa, terrível e inalcansável: O tesouro perdido do capitão pirata Barba Negra.
 //
 // Sua fama por ladrão de fortunas era grande, de modo que não houvesse cidadão que não conhecesse seus feitos. Mas seu reinado de capitão pirata não durara muito tempo, chegou ao fim quando foi caçado pela marinha real britânica pelos crimes cometidos contra o reino e a população. Em sua última partida do porto em 1277, o capitão Barba Negra trazia consigo todas as suas riquezas, todo o seu arsenal, numa tentativa desesperada de fugir. Perseguido ferozmente pelo navio de guerra inglês Drakkar, os dois lutaram com todas as suas forças, restanto ao capitão Barba Negra e seus homens fugirem e ao Drakkar retornar para terra, pelas incontáveis perdas.
 //

 const prompt = require("prompt-sync")();

 /**História inicial -- alinhamento dos personagens. */
console.log(`Olá jovem Jake seja bem-vindo a bordo do navio mercante Salazaar, esperamos contar com sua ajuda! `);
/**1º pergunta */
let agora = new Date();
let hora = agora.getHours();
console.log(hora);
let pergunta1 = prompt(`Soube da garrafa contendo o mapa do tesouro do capitão Barba Negra? `);

