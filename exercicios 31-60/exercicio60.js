// 60 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 7.

var numeros = [14, 18, 21, 24, 27, 30, 33, 34, 38, 42];

const numerosDivisiveisPorSete = () => {
   return numeros.filter(numero => numero % 7 === 0);
}

console.log (numerosDivisiveisPorSete());