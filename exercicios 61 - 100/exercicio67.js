//Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 5.

const numeros = [5, 10, 15, 20, 25, 30];

const multiplicandoPorCinco = (numeros) => {
    return numeros.map(numero => numero * 5);
};

const resultadoDosNumeros = multiplicandoPorCinco(numeros);

console.log(resultadoDosNumeros);