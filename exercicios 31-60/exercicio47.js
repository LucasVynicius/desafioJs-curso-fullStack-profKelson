// 47 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 10.

var numeros = [3, 4, 5, 6, 7, 8, 9];

const multiplicandoPorDez = (numeros) => {
   return numeros.map(numero => numero * 10);
}

const resultado = multiplicandoPorDez(numeros);

console.log(resultado);