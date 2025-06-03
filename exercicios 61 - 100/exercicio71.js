// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 3.

const listaDeNumeros = [4, 8, 12 , 16, 20, 24, 28];

const numerosIncrementado = (numeros) => {
    return numeros.map(numero => numero + 3);
};

const resultadoDoNumeros = numerosIncrementado(listaDeNumeros);

console.log(resultadoDoNumeros);

