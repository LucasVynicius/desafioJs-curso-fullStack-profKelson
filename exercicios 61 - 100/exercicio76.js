//  Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 6.

const listaDeNumeros = [9, 8, 7, 6, 5, 4];

const numerosMultiplosDeSeis = (numeros) => {
    return numeros.filter(numero => numero % 6 === 0);
};

const resultadoDeNumeros = numerosMultiplosDeSeis(listaDeNumeros);

console.log(resultadoDeNumeros);