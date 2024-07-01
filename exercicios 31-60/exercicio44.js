// 44 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 2.
var numeros = [2 , 3, 5, 8, 9, 12, 13, 16];

const numerosDivisiveisPorDois = (numeros) => {
   return numeros.filter( numero => numero % 2 === 0);
}

const resultado = numerosDivisiveisPorDois(numeros);

console.log(resultado);