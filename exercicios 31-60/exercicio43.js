// 43 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 3.

var numeros = [1, 2, 3, 4, 5, 6, 8];

const multiplicandoPorTres = (numeros) => {
   return numeros.map(numero => numero * 3);
}

const resultado = multiplicandoPorTres(numeros);

console.log(resultado);