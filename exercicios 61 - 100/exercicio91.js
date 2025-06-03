// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 6.

const listaDeNumeros = [5, 6, 7, 8, 9, 34, 56];

const numerosIncrementados = (numeros) => {
    return numeros.map(numero => numero + 6);
};

const resultadosDeNumeros = numerosIncrementados(listaDeNumeros);

console.log(resultadosDeNumeros);