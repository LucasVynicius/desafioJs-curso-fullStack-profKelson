// 59 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao cubo.

var numeros = [4, 6, 8, 10, 12, 14, 16, 18, 20];

const numerosAoCubo = () => {
   return numeros.map(numero => numero ** 3 );
}

console.log(numerosAoCubo());