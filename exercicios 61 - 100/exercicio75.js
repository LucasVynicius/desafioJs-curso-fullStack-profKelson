// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quarta potência.

const listaDeNumeros = [3, 4, 5, 6, 7, 8, 9];

const elevarAQuartaPotencia = (numeros) => {
    return numeros.map(numero => numero ** 4);
};

const resultadoDosNumeros = elevarAQuartaPotencia(listaDeNumeros);

console.log(resultadoDosNumeros);