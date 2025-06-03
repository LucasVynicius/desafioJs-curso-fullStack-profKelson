//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 7.

const listaDeNumeros = [9, 8, 7, 6, 5, 4];

const numerosMultiplicadoPorSete = (numeros) => {
    return numeros.map(numero => numero * 7);
};

const resultadoDeNumeros = numerosMultiplicadoPorSete(listaDeNumeros);

console.log(resultadoDeNumeros);