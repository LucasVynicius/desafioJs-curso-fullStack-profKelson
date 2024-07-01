// 51 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 5.

var numeros = [1, 2, 3, 4, 5, 6, 7];

const numerosIncrementado = (numeros) => {
   return numeros.map(numero => numero + 5);
}

const resultado = numerosIncrementado(numeros);

console.log(resultado);