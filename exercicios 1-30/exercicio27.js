// 27 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao quadrado.

var numeros = [3,6,9,12,15,18,21];

//função arrow que eleva cada número ao quadrado
const elevadoQuadrado = () => {
   return numeros.map(numero => numero **2);
}

var numerosQuadrados = elevadoQuadrado(numeros)

console.log(numerosQuadrados);