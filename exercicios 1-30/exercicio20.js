// 20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.

const numeros = [1995, 1996, 2019, 2024];
var soma = 0
// Definição da função arrow mediaNumeros
const mediaNumeros = (numero) => {
   return numero.reduce((a,b) => a + b) / numero.length;
}

media = mediaNumeros(numeros);

console.log(media);