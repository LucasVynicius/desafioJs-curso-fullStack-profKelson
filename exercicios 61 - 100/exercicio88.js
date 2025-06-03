// Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e menores que 20.

const listaDeNumeros = [15, 20, 25, 30, 35, 40, 45];

const numeroImpares = (numeros) => {
    return numeros.filter(numero => numero % 2 !== 0 && numero < 20);
};

const resultado = numeroImpares(listaDeNumeros);

console.log(resultado);