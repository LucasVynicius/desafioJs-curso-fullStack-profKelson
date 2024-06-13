// 36 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.

var numeros = [30, 32, 33, 35, 37, 38, 40];

const multiplosDeCinco = () => {
   return numeros.filter(numero => numero % 5 === 0);
}

var numerosMultiplosDeCinco = multiplosDeCinco(numeros);

console.log(numerosMultiplosDeCinco);