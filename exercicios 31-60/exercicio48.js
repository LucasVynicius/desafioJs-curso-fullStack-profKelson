// 48 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares.

var numeros = [21, 22, 23, 24, 30, 31, 33, 37];

const numerosImpares = (numeros) => {
   return numeros.filter(numero => numero % 2 !== 0);
}

const resultado = numerosImpares(numeros);

console.log(resultado);