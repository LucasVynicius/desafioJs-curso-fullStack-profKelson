// 23 - Crie um script que declare um array de números e utilize a função reduce() para calcular a soma de todos os números do array. Imprima o resultado.

var numeros = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28,];
var soma = 0;
let calcular = () => {
   return numeros.reduce((index, valorAtual) => index + valorAtual, soma );
}

console.log(calcular());