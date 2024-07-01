// 52 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 50.

var numeros = [20, 22, 24, 26, 30, 34, 36, 50, 52, 54, 56, 60, 64, 68];

const numerosMenoresQueCinquenta = (numeros) => {
   return numeros.filter (numero => numero < 50);
}

const resultado = numerosMenoresQueCinquenta(numeros);

console.log(resultado);