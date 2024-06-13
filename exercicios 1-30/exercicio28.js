// 28 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.

var numeros = [11, 12, 13, 14, 15, 16, 17, 18];

let multiplo = () => {
  return numeros.filter(n1 => n1 % 3 === 0);
};

const numerosMultiplos = multiplo(numeros);
console.log(numerosMultiplos);
