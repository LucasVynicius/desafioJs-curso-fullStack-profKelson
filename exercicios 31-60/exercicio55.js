// 55 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja dividido por 2.

var numeros = [40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];

const numerosDivididoPorDois = () => {
   return numeros.map(numero => numero / 2);
}

console.log(numerosDivididoPorDois());