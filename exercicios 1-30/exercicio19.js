// 19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. Utilize a função Math.min() para encontrar o menor número.

const numeros = [1,3, 5, 7, 9];

let menorNumero = (numero) => {
    return Math.min(...numero);
}

var numeroMenor = menorNumero(numeros);

console.log(numeroMenor);