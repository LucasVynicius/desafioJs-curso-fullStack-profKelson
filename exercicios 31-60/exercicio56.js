// 56 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 4.

var numeros = [40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];

const numerosMultiplosDeQuatro = () => {
   return numeros.filter(numero => numero % 4 === 0);
}

console.log(numerosMultiplosDeQuatro());