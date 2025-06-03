// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 4.

const listaDeNumeros = [16, 20, 24, 28, 32, 36, 40, 44];

const numerosDecrementados = (numeros) => {
    return numeros.map(numero => numero - 4);
};

const resultadoDosNumeros = numerosDecrementados(listaDeNumeros);

console.log(resultadoDosNumeros);