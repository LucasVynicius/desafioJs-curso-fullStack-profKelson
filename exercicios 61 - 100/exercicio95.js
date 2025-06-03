//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quinta potência.

const listaDeNumeros = [5, 6, 7, 8, 9, 34, 56];

const numerosElevado = (numeros) => {
    return numeros.map(numero => numero ** 5);
};

const resultadosDeNumeros = numerosElevado(listaDeNumeros);

console.log(resultadosDeNumeros);