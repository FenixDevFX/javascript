/* Faça um programa para calcular o valor de uma viagem.

Você terá 6 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo do combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 3.60;
const precoGasolina = 5.60;
const precoDiesel = 6.10;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = '';

const litrosConsumidos =  distanciaEmKm / kmPorLitros;

if (tipoCombustivel ==='Etanol'){
	const valorGasto = litrosConsumidos * precoEtanol;
	console.log(valorGasto.toFixed(2));
} else if (tipoCombustivel ==='Gasolina'){
	const valorGasto = litrosConsumidos * precoGasolina;
	console.log(valorGasto.toFixed(2));
} else {const valorGasto = litrosConsumidos * precoDiesel;
	console.log(valorGasto.toFixed(2));}