// 40 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 10.

const numeros = [3, 6, 9, 12, 15, 18, 21, 24, 27];

let numerosMaioresQueDez = () => {
   return numeros.filter (numero => numero > 10);
}

var numerosMaiores = numerosMaioresQueDez(numeros);

console.log(numerosMaiores);